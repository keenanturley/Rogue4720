import {
  createBufferInfoFromArrays,
  drawBufferInfo,
  m4,
  resizeCanvasToDisplaySize,
  setBuffersAndAttributes,
  setUniforms,
  createVertexArrayInfo,
} from 'twgl.js';
import Camera from './Camera';
import Mesh from './Mesh';
import MeshNode from './MeshNode';
import PerspectiveCamera from './PerspectiveCamera';
import Scene from './Scene';
import SceneNode from './SceneNode';
import Shader from './Shader';

export type UpdateCallback = (deltaTime?: number) => void;

type MeshNodeInstanceData = { node: MeshNode, matrix: m4.Mat4 };

export default class Renderer {
  gl: WebGL2RenderingContext;

  scene: Scene;

  camera: Camera;

  rendererUniforms: object;

  updateCallbacks: Set<UpdateCallback> = new Set();

  // Time in ms the last frame took to render
  frameTime: number = 0;

  private animationRequestId;

  private previousTime;

  private renderMap: Map<Shader, Map<Mesh, Array<MeshNodeInstanceData>>>;

  constructor(
    gl: WebGL2RenderingContext,
    scene: Scene = new Scene(),
    camera: Camera = new PerspectiveCamera(),
  ) {
    this.gl = gl;
    this.scene = scene;
    this.camera = camera;

    this.renderMap = new Map();

    // Content initialization
    gl.clearColor(0.2, 0.075, 0.0, 1.0);

    // eslint-disable-next-line no-bitwise
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

    gl.enable(gl.DEPTH_TEST);
    gl.enable(gl.CULL_FACE);
  }

  drawScene(time: number) {
    this.rendererUniforms = {
      u_time: time * 0.001,
      u_resolution: [this.gl.canvas.width, this.gl.canvas.height],
    };

    this.renderMap.clear();
    this.processNode(this.scene.root, m4.identity());

    // Render from renderMap (for each material type)
    this.renderMap.forEach((meshMap, shader) => {
      // each unique mesh
      meshMap.forEach((meshNodeInstances, mesh) => {
        if (!meshNodeInstances) {
          return;
        }
        const programInfo = shader.getProgramInfo(this.gl);
        this.gl.useProgram(programInfo.program);

        // Compute matrix
        const cameraMatrix = this.camera.getViewProjectionMatrix();
        const eyePosition = m4.inverse(this.camera.getViewMatrix()).slice(12, 15);

        const templateNode = meshNodeInstances[0].node;

        // Set all uniforms
        setUniforms(programInfo, [
          this.rendererUniforms,
          templateNode.material.uniforms,
          {
            u_eyePosition: eyePosition,
            u_cameraMatrix: cameraMatrix,
          },
        ]);

        const matrices = new Float32Array(16 * meshNodeInstances.length);

        meshNodeInstances.forEach((instance, i) => matrices.set(instance.matrix, i * 16));

        const arrays = {
          ...mesh.getArrays(),
          a_matrix: {
            numComponents: 16,
            data: matrices,
            divisor: 1,
          },
        };

        // Precompute numElements for BufferInfo object to prevent TWGL GL Calls
        let numElements: number;
        if (mesh.indices) {
          numElements = mesh.indices.length / 3;
        } else {
          numElements = mesh.position.length / 3;
        }

        const bufferInfo = createBufferInfoFromArrays(
          this.gl,
          arrays,
          { numElements },
        );
        const vertexArrayInfo = createVertexArrayInfo(this.gl, programInfo, bufferInfo);

        setBuffersAndAttributes(this.gl, programInfo, vertexArrayInfo);

        drawBufferInfo(
          this.gl,
          vertexArrayInfo,
          this.gl.TRIANGLES,
          vertexArrayInfo.numElements,
          0,
          meshNodeInstances.length,
        );
      });
    });
  }

  processNode(node: SceneNode, parentMatrix: m4.Mat4) {
    // Compute this node's matrix
    let matrix = node.localTransform.getMatrix();
    matrix = m4.multiply(parentMatrix, matrix);

    // Process self
    if (node instanceof MeshNode) {
      const { shader } = node.material;
      if (!this.renderMap.has(shader)) {
        this.renderMap.set(shader, new Map());
      }
      const shaderMeshMap = this.renderMap.get(shader);

      if (!shaderMeshMap.has(node.mesh)) {
        shaderMeshMap.set(node.mesh, new Array<MeshNodeInstanceData>());
      }
      const meshNodeInstances = shaderMeshMap.get(node.mesh);
      meshNodeInstances.push({ node, matrix });
    }

    // if (node instanceof MeshNode) {
    //   // Get the mesh's buffer info
    //   const bufferInfo = node.mesh.getBufferInfo(this.gl);

    //   const programInfo = node.material.shader.getProgramInfo(this.gl);
    //   this.gl.useProgram(programInfo.program);

    //   setBuffersAndAttributes(this.gl, programInfo, bufferInfo);

    //   // Compute matrix
    //   const cameraMatrix = this.camera.getViewProjectionMatrix();
    //   const projectedMatrix = m4.multiply(this.camera.getViewProjectionMatrix(), matrix);
    //   const eyePosition = m4.inverse(this.camera.getViewMatrix()).slice(12, 15);

    //   // Set all uniforms
    //   setUniforms(programInfo, [
    //     this.rendererUniforms,
    //     node.material.uniforms,
    //     {
    //       u_eyePosition: eyePosition,
    //       u_cameraMatrix: cameraMatrix,
    //     },
    //   ]);

    //   // Render
    //   drawBufferInfo(this.gl, bufferInfo);
    // }

    // Process all children
    node.getChildren().forEach((child) => this.processNode(child, matrix));
  }

  addUpdateCallback(callback: UpdateCallback): void {
    this.updateCallbacks.add(callback);
  }

  removeUpdateCallback(callback: UpdateCallback): boolean {
    if (!this.updateCallbacks.has(callback)) {
      return false;
    }
    this.updateCallbacks.delete(callback);
    return true;
  }

  preRender(deltaTime: number) {
    this.updateCallbacks.forEach((callback) => callback(deltaTime));
  }

  render(time: number) {
    const deltaTime = this.previousTime ? time - this.previousTime : 0;

    const startTime = performance.now();

    this.preRender(deltaTime);

    resizeCanvasToDisplaySize(this.gl.canvas);
    this.gl.viewport(0, 0, this.gl.canvas.width, this.gl.canvas.height);

    this.gl.clear(this.gl.COLOR_BUFFER_BIT);
    this.drawScene(time);

    const endTime = performance.now();
    this.frameTime = endTime - startTime;

    this.previousTime = time;
    this.animationRequestId = requestAnimationFrame((newTime: number) => this.render(newTime));
  }

  stopRendering() {
    cancelAnimationFrame(this.animationRequestId);
  }
}
