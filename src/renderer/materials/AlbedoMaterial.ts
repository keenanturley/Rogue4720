import * as Path from 'path';
// eslint-disable-next-line import/no-cycle
import {
  Material, BaseMaterialResourceSchema, materialLoaderMap, MaterialType,
} from './_MaterialInternal';
import Shader from '../Shader';
import Texture from '../Texture';

interface ResourceSchema extends BaseMaterialResourceSchema {
  type: 'AlbedoMaterial';
  texture: string;
}

const shaderUrl = '/assets/shaders/albedo/shader.json';
const albedoShader = await Shader.load(shaderUrl);

interface AlbedoMaterialUniforms {
  u_texture: WebGLTexture;
}

// eslint-disable-next-line import/prefer-default-export
export class AlbedoMaterial extends Material<AlbedoMaterialUniforms> {
  static type: MaterialType = 'AlbedoMaterial';

  private texture: Texture;

  constructor(texture: Texture) {
    super(albedoShader, { u_texture: texture });
    this.setTexture(texture);
  }

  setTexture(texture: Texture) {
    this.texture = texture;
    this.uniforms.u_texture = texture.m_texture;
  }

  static async loadFromConfig(url: string, config: ResourceSchema): Promise<AlbedoMaterial> {
    const dir = Path.dirname(url);
    const textureUrl = Path.resolve(dir, config.texture);
    const texture = await Texture.load(textureUrl);

    return new AlbedoMaterial(texture);
  }
}

materialLoaderMap.set('AlbedoMaterial', AlbedoMaterial.loadFromConfig);
