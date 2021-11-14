import { m4 } from 'twgl.js';
import Camera from './Camera';
import Transform from './Transform';

export default class PerspectiveCamera extends Camera {
  transform: Transform;

  fov: number;

  aspect: number;

  zNear: number;

  zFar: number;

  constructor(
    transform: Transform = new Transform(),
    fov: number = 60,
    aspect: number = 1,
    zNear: number = 0.1,
    zFar: number = 1000,
  ) {
    super();

    this.transform = transform;
    this.fov = fov;
    this.aspect = aspect;
    this.zNear = zNear;
    this.zFar = zFar;
  }

  getViewProjectionMatrix(): m4.Mat4 {
    const projectionMatrix = this.getProjectionMatrix();
    const viewMatrix = this.getViewMatrix();

    return m4.multiply(projectionMatrix, viewMatrix);
  }

  getProjectionMatrix(): m4.Mat4 {
    return m4.perspective(
      PerspectiveCamera.toRadians(this.fov),
      this.aspect,
      this.zNear,
      this.zFar,
    );
  }

  getViewMatrix(): m4.Mat4 {
    return this.transform.getMatrix();
  }

  private static toRadians(degrees: number) {
    return degrees * (Math.PI / 180.0);
  }
}
