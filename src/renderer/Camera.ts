import { m4 } from 'twgl.js';

export default abstract class Camera {
  abstract getViewProjectionMatrix(): m4.Mat4;
}
