import { m4 } from 'twgl.js';
import Transform from './Transform';

export default abstract class Camera {
  transform: Transform;

  abstract getViewProjectionMatrix(): m4.Mat4;
  abstract getViewMatrix(): m4.Mat4;
  abstract getProjectionMatrix(): m4.Mat4;
}
