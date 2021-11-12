import { Texture as threeTexture, TextureLoader } from 'three';

/**
 * A class for constructing a texuture and include it's data,
 * it uses the TextureLoader class from Three.js.
 */
export default class Texture {
  private m_filePath: string;

  texture: threeTexture;

  constructor(path: string) {
    this.m_filePath = path;

    const loader = new TextureLoader();
    this.texture = loader.load(path);
  }
}
