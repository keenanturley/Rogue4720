import {
  bindFramebufferInfo,
  createFramebufferInfo,
  createTexture,
  drawBufferInfo,
  FramebufferInfo,
  m4,
  ProgramInfo,
  resizeCanvasToDisplaySize,
  setBuffersAndAttributes,
  setUniforms,
} from 'twgl.js';
import MeshNode from './MeshNode';
import PerspectiveCamera from './PerspectiveCamera';
import Scene from './Scene';
import SceneNode from './SceneNode';
import SceneLightingSchema from './SceneLightingSchema';
import Shader from './Shader';

export enum Rendering{normal, depth, depthDebug}

const depthMapShader = await Shader.load('/assets/shaders/depthMap/shader.json');
const depthMapDebugShader = await Shader.load('/assets/shaders/depthMap/debugShader.json');
const configRequest = await fetch('/assets/lighting.json');
const sceneLightingConfig = (await configRequest.json()) as SceneLightingSchema;

export default class Renderer {
  gl: WebGL2RenderingContext;

  scene: Scene;

  camera: PerspectiveCamera;

  rendererUniforms: object;

  private animationRequestId;

  private previousTime;

  private depthMapFBO: FramebufferInfo;

  private depthMap: WebGLTexture;

  private readonly SHADOW_WIDTH: number = 1024;

  private readonly SHADOW_HEIGHT:number = 1024;

  preRender: (deltaTime: number) => void;

  // Time in ms the last frame took to render
  frameTime: number = 0;

  constructor(
    gl: WebGL2RenderingContext,
    scene: Scene = new Scene(),
    camera: PerspectiveCamera = new PerspectiveCamera(),
    preRender: (deltaTime: number) => void = () => {},
  ) {
    this.gl = gl;
    this.scene = scene;
    this.camera = camera;

    this.gl.checkFramebufferStatus(this.gl.FRAMEBUFFER);

    this.depthMap = createTexture(this.gl,
      {
        target: gl.TEXTURE_2D,
        level: 0,
        internalFormat: gl.DEPTH_COMPONENT32F,
        width: this.SHADOW_WIDTH,
        height: this.SHADOW_HEIGHT,
        format: gl.DEPTH_COMPONENT,
        type: gl.FLOAT,
        minMag: gl.NEAREST,
        wrap: gl.REPEAT,
      });

    this.depthMapFBO = createFramebufferInfo(this.gl,
      [{
        attachmentPoint: gl.DEPTH_ATTACHMENT,
        format: gl.DEPTH_COMPONENT,
        type: gl.FLOAT,
        attachment: this.depthMap,
        width: this.SHADOW_WIDTH,
        height: this.SHADOW_HEIGHT,
      }],
      this.SHADOW_WIDTH,
      this.SHADOW_HEIGHT);

    bindFramebufferInfo(this.gl, this.depthMapFBO);

    this.gl.drawBuffers([]); // same as gl.NONE, but this takes in a number[]
    this.gl.readBuffer(gl.NONE);
    bindFramebufferInfo(this.gl);

    const depthPI = depthMapDebugShader.getProgramInfo(this.gl);
    setUniforms(depthPI, { u_depthMap: this.depthMap });

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

  drawNode(node: SceneNode, parentMatrix: m4.Mat4, rendering: Rendering = Rendering.normal) {
    // Compute this node's matrix
    let matrix = node.localTransform.getMatrix();
    matrix = m4.multiply(matrix, parentMatrix);

    // Draw self
    if (node instanceof MeshNode) {
      // Get the mesh's buffer info
      const bufferInfo = node.mesh.getBufferInfo(this.gl);

      let programInfo: ProgramInfo;

      // eslint-disable-next-line default-case
      switch (rendering) {
        case Rendering.normal:
          programInfo = node.material.shader.getProgramInfo(this.gl);
          break;

        case Rendering.depth:
          programInfo = depthMapShader.getProgramInfo(this.gl);
          break;

        case Rendering.depthDebug:
          programInfo = depthMapDebugShader.getProgramInfo(this.gl);
          break;
      }

      this.gl.useProgram(programInfo.program);

      setBuffersAndAttributes(this.gl, programInfo, bufferInfo);

      // Set uniforms
      // eslint-disable-next-line default-case
      switch (rendering) {
        case Rendering.normal: {
          setUniforms(programInfo, node.material.uniforms);
          setUniforms(programInfo, this.rendererUniforms);

          // Compute matrix
          const cameraMatrix = this.camera.getViewProjectionMatrix();
          const projectedMatrix = m4.multiply(this.camera.getViewProjectionMatrix(), matrix);
          const eyePosition = m4.inverse(this.camera.getViewMatrix()).slice(12, 15);
          setUniforms(programInfo, {
            u_matrix: projectedMatrix,
            u_modelMatrix: matrix,
            u_eyePosition: eyePosition,
            u_cameraMatrix: cameraMatrix,
          });
          break;
        }

        case Rendering.depth: {
          const nearPlane: number = 1.0;
          const farPlane: number = 7.5;

          const lightProjection = m4.ortho(-100.0, 100.0, -100.0, 100.0, nearPlane, farPlane);

          const { dLightDirection } = sceneLightingConfig;

          const lightView = m4.lookAt(dLightDirection, [0, 0, 0], [0, 1, 0]);

          const lightSpaceMatrix = m4.multiply(lightProjection, lightView);

          setUniforms(programInfo,
            { u_lightSpaceMatrix: lightSpaceMatrix, u_model: m4.identity() });

          bindFramebufferInfo(this.gl, this.depthMapFBO);

          this.gl.clear(this.gl.DEPTH_BUFFER_BIT);

          this.gl.bindTexture(this.gl.TEXTURE_2D, this.depthMap);
          break;
        }

        case Rendering.depthDebug: {
          const nearPlane: number = 1.0;
          const farPlane: number = 7.5;

          setUniforms(programInfo,
            { u_nearPlane: nearPlane, u_farPlane: farPlane });
        }
      }

      // Render
      drawBufferInfo(this.gl, bufferInfo);

      bindFramebufferInfo(this.gl);
    }

    // Draw all children
    node.getChildren().forEach((child) => this.drawNode(child, matrix, rendering));
  }

  render(time: number, rendering: Rendering = Rendering.normal) {
    const deltaTime = this.previousTime ? time - this.previousTime : 0;

    const startTime = performance.now();

    this.preRender(deltaTime);

    resizeCanvasToDisplaySize(this.gl.canvas);

    // eslint-disable-next-line default-case
    switch (rendering) {
      case Rendering.normal:
        this.gl.viewport(0, 0, this.gl.canvas.width, this.gl.canvas.height);

        // eslint-disable-next-line no-bitwise
        this.gl.clear(this.gl.COLOR_BUFFER_BIT | this.gl.DEPTH_BUFFER_BIT);

        this.drawScene(time);
        break;

      case Rendering.depth:
        this.gl.viewport(0, 0, this.SHADOW_WIDTH, this.SHADOW_HEIGHT);

        this.drawNode(this.scene.root, m4.identity(), rendering);
        break;

      case Rendering.depthDebug:
        this.gl.viewport(0, 0, this.gl.canvas.width, this.gl.canvas.height);

        // eslint-disable-next-line no-bitwise
        this.gl.clear(this.gl.COLOR_BUFFER_BIT | this.gl.DEPTH_BUFFER_BIT);

        this.drawNode(this.scene.root, m4.identity(), rendering);
    }

    const endTime = performance.now();
    this.frameTime = endTime - startTime;

    this.previousTime = time;
    this.animationRequestId = requestAnimationFrame((newTime: number) => {
      this.render(newTime, rendering);
    });
  }

  depthMapRender(time: number, debug: boolean = false) {
    this.gl.clearColor(0.1, 0.1, 0.1, 1.0);

    // eslint-disable-next-line no-bitwise
    this.gl.clear(this.gl.COLOR_BUFFER_BIT | this.gl.DEPTH_BUFFER_BIT);

    this.render(time, Rendering.depth);

    bindFramebufferInfo(this.gl);

    if (debug) this.render(time, Rendering.depthDebug);
  }

  stopRendering() {
    cancelAnimationFrame(this.animationRequestId);
  }
}
