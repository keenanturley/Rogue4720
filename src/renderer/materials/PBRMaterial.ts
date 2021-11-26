import Material from './Material';
import Shader from '../Shader';
import PBRVertexShader from '../../shaders/pbr.vert';
import PBRFragmentShader from '../../shaders/pbr.frag';
import Texture from '../Texture';

const PBRShader = new Shader(PBRVertexShader, PBRFragmentShader);

interface PBRMaterialUniforms {
  u_albedo: WebGLTexture;
  u_normal: WebGLTexture;
  u_mrao: WebGLTexture;
  u_light: number[];
}

export default class PBRMaterial extends Material<PBRMaterialUniforms> {
  private albedo: Texture;
  private normal: Texture;
  private mrao: Texture;
  private light: number[];

  constructor(albedo: Texture, normal: Texture, mrao: Texture) {
    super(PBRShader, { u_albedo: albedo, u_normal: normal, u_mrao: mrao, u_light: [0.5, 0.5, -0.5] });
    this.setAlbedo(albedo);
    this.setNormal(normal);
    this.setMrao(mrao);
	this.setLight([0.5, 0.5, -0.5]);
  }

  setAlbedo(albedo: Texture) {
    this.albedo = albedo;
    this.uniforms.u_albedo = albedo.m_texture;
  }

  setNormal(normal: Texture) {
    this.normal = normal;
    this.uniforms.u_normal = normal.m_texture;
  }

  setMrao(mrao: Texture) {
    this.mrao = mrao;
    this.uniforms.u_mrao = mrao.m_texture;
  }

  setLight(light: number[]) {
    this.light = light;
    this.uniforms.u_light = light;
  }
}
