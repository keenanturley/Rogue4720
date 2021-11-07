import Camera from './Camera';
import Scene from './Scene';

export default class Renderer {
  gl: WebGL2RenderingContext;

  constructor(gl: WebGL2RenderingContext) {
    this.gl = gl;
  }

  static drawScene(scene: Scene, camera: Camera) {
    // TODO
  }
}
