import { m4 } from 'twgl.js';
import Camera from './Camera';
import Transform from './Transform';

export default class OrthographicCamera extends Camera {
  transform: Transform;

  left: number;

  right: number;

  bottom: number;

  top: number;

  near: number;

  far: number;

  constructor(
    transform: Transform = new Transform(),
    left: number = -1.0,
    right: number = 1.0,
    bottom: number = -1.0,
    top: number = 1.0,
    near: number = 0.0,
    far: number = -1.0,
  ) {
    super();

    this.transform = transform;

    this.left = left;
    this.right = right;
    this.bottom = bottom;
    this.top = top;
    this.near = near;
    this.far = far;
  }

  getViewProjectionMatrix(): m4.Mat4 {
    const projectionMatrix = this.getProjectionMatrix();
    const viewMatrix = this.getViewMatrix();

    return m4.multiply(projectionMatrix, viewMatrix);
  }

  getProjectionMatrix(): m4.Mat4 {
    return m4.ortho(
      this.left,
      this.right,
      this.bottom,
      this.top,
      this.near,
      this.far,
    );
  }

  getViewMatrix(): m4.Mat4 {
    return this.transform.getMatrix();
  }
}
