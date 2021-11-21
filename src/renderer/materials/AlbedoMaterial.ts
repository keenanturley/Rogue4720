import Material from './Material';
import Shader from '../Shader';
import albedoVertexShader from '../../shaders/albedo.vert';
import albedoFragmentShader from '../../shaders/albedo.frag';
import Texture from '../Texture';

const albedoShader = new Shader(albedoVertexShader, albedoFragmentShader);

interface AlbedoMaterialUniforms {
  u_texture: WebGLTexture;
}

export default class AlbedoMaterial extends Material<AlbedoMaterialUniforms> {
  private texture: Texture;

  constructor(texture: Texture) {
    super(albedoShader, { u_texture: texture });
    this.setTexture(texture);
  }

  setTexture(texture: Texture) {
    this.texture = texture;
    this.uniforms.u_texture = texture.m_texture;
  }
}
