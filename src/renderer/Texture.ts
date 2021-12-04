import * as twgl from 'twgl.js';

/**
 * A class for constructing a texuture and include it's data,
 * it uses the TextureLoader class from Three.js.
 */
export default class Texture {
  static cache = new Map<string, Texture>();

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

  static async load(url: string): Promise<Texture> {
    if (this.cache.has(url)) {
      return this.cache.get(url);
    }

    // Hacky way of getting the context so we don't
    // have to pass it in to the load function
    const context = document.getElementsByTagName('canvas')[0].getContext('webgl2');

    const texture = new Texture(context, url);
    this.cache.set(url, texture);
    return texture;
  }
}
