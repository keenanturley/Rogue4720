import { BufferInfo, createBufferInfoFromArrays, primitives } from 'twgl.js';

/**
 * A less-generalized Mesh representation. For simplicity we are sticking with
 * having 3 attributes (position, normal, and uv) alongside the indices.
 *
 * These attributes are meant to be passed into a shader with standard names
 * as shown.
 *
 * You may leave out normal, uv, or indices.
 *
 * The number of components for these members should always be:
 * /--------------\
 * | position | 3 |
 * | normal   | 3 |
 * | uv       | 2 |
 * | indices  | 3 |
 * \--------------/
 *
 * This is a class to generalize later on, as its invariants are stiff.
 */
export default class Mesh {
  static NUM_COMPONENTS_POSITION = 3;

  static NUM_COMPONENTS_NORMAL = 3;

  static NUM_COMPONENTS_UV = 2;

  static NUM_COMPONENTS_INDICES = 3;

  position: primitives.TypedArray;

  normal?: primitives.TypedArray;

  uv?: primitives.TypedArray;

  indices?: primitives.TypedArray;

  bufferInfo?: BufferInfo;

  name: string;

  constructor(
    position: primitives.TypedArray,
    normal?: primitives.TypedArray,
    uv?: primitives.TypedArray,
    indices?: primitives.TypedArray,
    name?: string,
  ) {
    this.position = position;
    this.normal = normal;
    this.uv = uv;
    this.indices = indices;
    this.name = name;
  }

  createArrays() {
    return {
      position: {
        numComponents: Mesh.NUM_COMPONENTS_POSITION,
        data: this.position,
      },
      ...(this.normal && {
        normal: {
          numComponents: Mesh.NUM_COMPONENTS_NORMAL,
          data: this.normal,
        },
      }),
      ...(this.uv && {
        uv: {
          numComponents: Mesh.NUM_COMPONENTS_UV,
          data: this.uv,
        },
      }),
      ...(this.indices && {
        indices: {
          numComponents: Mesh.NUM_COMPONENTS_INDICES,
          data: this.indices,
        },
      }),
    };
  }

  getBufferInfo(gl): BufferInfo {
    if (!this.bufferInfo) {
      this.bufferInfo = createBufferInfoFromArrays(gl, this.createArrays());
    }
    return this.bufferInfo;
  }
}
