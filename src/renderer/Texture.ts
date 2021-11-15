import * as twgl from 'twgl.js';

/**
 * A class for constructing a texuture and include it's data,
 * it uses the TextureLoader class from Three.js.
 */
export default class Texture {
  m_texture: WebGLTexture;

  constructor(context: WebGLRenderingContext, url: string) {
    this.m_texture = twgl.createTexture(context, {
      src: url,
      flipY: 1,
      wrap: context.REPEAT,
      min: context.NEAREST_MIPMAP_LINEAR,
      mag: context.LINEAR,
    });
  }
}
