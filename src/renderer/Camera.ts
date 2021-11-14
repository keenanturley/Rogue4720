import { m4 } from 'twgl.js';

export default abstract class Camera {
  abstract get ViewProjectionMatrix(): m4.Mat4;
}
