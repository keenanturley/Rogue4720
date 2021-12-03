import { m4, v3 } from 'twgl.js';
import toRadians from '../util/Math';

export default class Transform {
  position: v3.Vec3;

  rotation: v3.Vec3;

  scale: v3.Vec3;

  constructor(
    position: v3.Vec3 = new Float32Array([0.0, 0.0, 0.0]),
    rotation: v3.Vec3 = new Float32Array([0.0, 0.0, 0.0]),
    scale: v3.Vec3 = new Float32Array([1.0, 1.0, 1.0]),
  ) {
    this.position = position;
    this.rotation = rotation;
    this.scale = scale;
  }

  /**
     * Uses TWGL m4 to multiply scale, rotation, and translation matrices
     * together to get the matrix representing this model's transform.
     *
     * The order of operations is important. We want the following formula:
     * Matrix = Translation * Rotation * Scale * Identity
     */
  getMatrix(): m4.Mat4 {
    const matrix = m4.identity();
    m4.scale(matrix, this.scale, matrix);
    m4.translate(matrix, this.position, matrix);
    m4.rotateZ(matrix, toRadians(this.rotation[2]), matrix);
    m4.rotateY(matrix, toRadians(this.rotation[1]), matrix);
    m4.rotateX(matrix, toRadians(this.rotation[0]), matrix);
    return matrix;
  }

  getForwardVector(): v3.Vec3 {
    const forward = v3.create(0, 0, -1);
    const matrix = m4.identity();
    m4.rotateZ(matrix, toRadians(this.rotation[2]), matrix);
    m4.rotateY(matrix, toRadians(this.rotation[1]), matrix);
    m4.rotateX(matrix, toRadians(this.rotation[0]), matrix);
    return m4.transformDirection(matrix, forward);
  }

  getRightVector(): v3.Vec3 {
    const right = v3.create(1, 0, 0);
    const matrix = m4.identity();
    m4.rotateZ(matrix, toRadians(this.rotation[2]), matrix);
    m4.rotateY(matrix, toRadians(this.rotation[1]), matrix);
    m4.rotateX(matrix, toRadians(this.rotation[0]), matrix);
    return m4.transformDirection(matrix, right);
  }

  getUpVector(): v3.Vec3 {
    const up = v3.create(0, 1, 0);
    const matrix = m4.identity();
    m4.rotateZ(matrix, toRadians(this.rotation[2]), matrix);
    m4.rotateY(matrix, toRadians(this.rotation[1]), matrix);
    m4.rotateX(matrix, toRadians(this.rotation[0]), matrix);
    return m4.transformDirection(matrix, up);
  }
}
