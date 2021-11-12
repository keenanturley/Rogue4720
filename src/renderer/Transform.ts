import { m4, v3 } from 'twgl.js';

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
    m4.multiply(m4.scaling(this.scale), matrix, matrix);
    m4.multiply(m4.rotationX(Transform.toRadians(this.rotation[0])), matrix, matrix);
    m4.multiply(m4.rotationY(Transform.toRadians(this.rotation[1])), matrix, matrix);
    m4.multiply(m4.rotationZ(Transform.toRadians(this.rotation[2])), matrix, matrix);
    m4.multiply(m4.translation(this.position), matrix, matrix);

    return matrix;
  }

  private static toRadians(degrees: number) {
    return degrees * (Math.PI / 180.0);
  }
}
