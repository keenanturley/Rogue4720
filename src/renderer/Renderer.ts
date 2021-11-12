import {
  drawBufferInfo, m4, resizeCanvasToDisplaySize, setBuffersAndAttributes, setUniforms,
} from 'twgl.js';
import Camera from './Camera';
import MeshNode from './MeshNode';
import PerspectiveCamera from './PerspectiveCamera';
import Scene from './Scene';
import SceneNode from './SceneNode';

export default class Renderer {
  gl: WebGL2RenderingContext;

  scene: Scene;

  camera: Camera;

  rendererUniforms: object;

  private animationRequestId;

  preRender: () => void;

  constructor(
    gl: WebGL2RenderingContext,
    scene: Scene = new Scene(),
    camera: Camera = new PerspectiveCamera(),
    preRender: () => void = () => {},
  ) {
    this.gl = gl;
    this.scene = scene;
    this.camera = camera;
    this.preRender = preRender;

    // Content initialization
    gl.clearColor(0.8, 0.8, 0.8, 1.0);

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

    this.drawNode(this.scene.root, m4.identity());
  }

  drawNode(node: SceneNode, parentMatrix: m4.Mat4) {
    // Compute this node's matrix
    let matrix = node.localTransform.getMatrix();
    matrix = m4.multiply(matrix, parentMatrix);

    // Draw self
    if (node instanceof MeshNode) {
      // Get the mesh's buffer info
      const bufferInfo = node.mesh.getBufferInfo(this.gl);

      const programInfo = node.material.shader.createProgramInfo(this.gl);
      this.gl.useProgram(programInfo.program);

      setBuffersAndAttributes(this.gl, programInfo, bufferInfo);

      // Set uniforms
      setUniforms(programInfo, node.material.uniforms);
      setUniforms(programInfo, this.rendererUniforms);

      // Compute matrix
      const projectedMatrix = m4.multiply(this.camera.getViewProjectionMatrix(), matrix);
      setUniforms(programInfo, { u_matrix: projectedMatrix });

      // Render
      drawBufferInfo(this.gl, bufferInfo);
    }

    // Draw all children
    node.getChildren().forEach((child) => this.drawNode(child, matrix));
  }

  render(time: number) {
    this.preRender();

    resizeCanvasToDisplaySize(this.gl.canvas);
    this.gl.viewport(0, 0, this.gl.canvas.width, this.gl.canvas.height);

    this.gl.clear(this.gl.COLOR_BUFFER_BIT);
    this.drawScene(time);

    this.animationRequestId = requestAnimationFrame((newTime: number) => this.render(newTime));
  }

  stopRendering() {
    cancelAnimationFrame(this.animationRequestId);
  }
}
