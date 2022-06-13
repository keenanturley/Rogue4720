import { m4, v3 } from 'twgl.js';
import { toRadians, toDegrees } from '../util/Math';

export default class Transform {
  private position: v3.Vec3;

  // In radians
  private rotation: v3.Vec3;

  private scale: v3.Vec3;

  private matrix: m4.Mat4;

  private bDirtyMatrix: boolean;

  constructor(
    position: v3.Vec3 = new Float32Array([0.0, 0.0, 0.0]),
    rotation: v3.Vec3 = new Float32Array([0.0, 0.0, 0.0]),
    scale: v3.Vec3 = new Float32Array([1.0, 1.0, 1.0]),
  ) {
    this.position = position;
    this.rotation = rotation;
    this.scale = scale;
    this.bDirtyMatrix = false;
  }

  // Workaround for lack of copy constructor
  static copy(sourceTransform: Transform): Transform {
    return new Transform(
      new Float32Array(sourceTransform.position),
      new Float32Array(sourceTransform.rotation),
      new Float32Array(sourceTransform.scale),
    );
  }

  /**
     * Uses TWGL m4 to multiply scale, rotation, and translation matrices
     * together to get the matrix representing this model's transform.
     *
     * The order of operations is important. We want the following formula:
     * Matrix = Translation * Rotation * Scale * Identity
     */
  getMatrix(): m4.Mat4 {
    if (!this.bDirtyMatrix && this.matrix) {
      return this.matrix;
    }
    const matrix = m4.identity();
    m4.scale(matrix, this.scale, matrix);
    m4.translate(matrix, this.position, matrix);
    m4.rotateZ(matrix, this.rotation[2], matrix);
    m4.rotateY(matrix, this.rotation[1], matrix);
    m4.rotateX(matrix, this.rotation[0], matrix);
    this.matrix = matrix;
    this.bDirtyMatrix = false;
    return this.matrix;
  }

  getPosition(): v3.Vec3 {
    return this.position;
  }

  setPosition(position: v3.Vec3) {
    this.position = position;
    this.bDirtyMatrix = true;
  }

  getScale(): v3.Vec3 {
    return this.scale;
  }

  setScale(scale: v3.Vec3) {
    this.scale = scale;
    this.bDirtyMatrix = true;
  }

  getForwardVector(): v3.Vec3 {
    const forward = v3.create(0, 0, -1);
    const matrix = m4.identity();
    m4.rotateZ(matrix, this.rotation[2], matrix);
    m4.rotateY(matrix, this.rotation[1], matrix);
    m4.rotateX(matrix, this.rotation[0], matrix);
    return m4.transformDirection(matrix, forward);
  }

  getRightVector(): v3.Vec3 {
    const right = v3.create(1, 0, 0);
    const matrix = m4.identity();
    m4.rotateZ(matrix, this.rotation[2], matrix);
    m4.rotateY(matrix, this.rotation[1], matrix);
    m4.rotateX(matrix, this.rotation[0], matrix);
    return m4.transformDirection(matrix, right);
  }

  getUpVector(): v3.Vec3 {
    const up = v3.create(0, 1, 0);
    const matrix = m4.identity();
    m4.rotateZ(matrix, this.rotation[2], matrix);
    m4.rotateY(matrix, this.rotation[1], matrix);
    m4.rotateX(matrix, this.rotation[0], matrix);
    return m4.transformDirection(matrix, up);
  }

  setRotationDeg(rotationDeg: v3.Vec3) {
    this.rotation = [
      toRadians(rotationDeg[0]),
      toRadians(rotationDeg[1]),
      toRadians(rotationDeg[2]),
    ];
    this.bDirtyMatrix = true;
  }

  setRotationRad(rotationRad: v3.Vec3) {
    this.rotation = rotationRad;
    this.bDirtyMatrix = true;
  }

  getRotationRad(): v3.Vec3 {
    return this.rotation;
  }

  getRotationDeg(): v3.Vec3 {
    return [
      toDegrees(this.rotation[0]),
      toDegrees(this.rotation[1]),
      toDegrees(this.rotation[2]),
    ];
  }
}
