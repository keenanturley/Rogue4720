import * as Path from 'path';
import {
  Material, BaseMaterialResourceSchema, materialLoaderMap, MaterialType,
} from './_MaterialInternal';
import Shader from '../Shader';
import Texture from '../Texture';

const PBRShader = await Shader.load('/assets/shaders/pbr/shader.json');

interface ResourceSchema extends BaseMaterialResourceSchema {
  type: 'PBRMaterial';
  albedo: string;
  normal: string;
  mrao: string;
  dLightDir: number[];
  dLightCol: number[];
  pLightsPos: number[];
  pLightsCols: number[];
}

interface PBRMaterialUniforms {
  u_albedo: WebGLTexture;
  u_normal: WebGLTexture;
  u_mrao: WebGLTexture;
  u_dLightDirection: number[];
  u_dLightColor: number[];
  u_pLightPositions: number[];
  u_pLightColors: number[];
}

export default class PBRMaterial extends Material<PBRMaterialUniforms> {
  static type: MaterialType = 'PBRMaterial';

  private albedo: Texture;

  private normal: Texture;

  private mrao: Texture;

  private lightPositions: number[];

  private ligthColors: number[];

  constructor(albedo: Texture, normal: Texture, mrao: Texture,
    pLightPos: number[], pLightCols: number[], dLightDir: number[], dLightCol: number[]) {
    super(PBRShader, {
      u_albedo: albedo,
      u_normal: normal,
      u_mrao: mrao,
      u_dLightDirection: dLightDir,
      u_dLightColor: dLightCol,
      u_pLightPositions: pLightPos,
      u_pLightColors: pLightCols,
    });
    this.setAlbedo(albedo);
    this.setNormal(normal);
    this.setMrao(mrao);
    this.setLights(pLightPos, pLightCols);
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

  setLights(lightPos: number[], lightCols: number[]) {
    this.lightPositions = lightPos;
    this.uniforms.u_pLightPositions = lightPos;

    this.ligthColors = lightCols;
    this.uniforms.u_pLightColors = lightCols;
  }

  static async loadFromConfig(url: string, config: ResourceSchema): Promise<PBRMaterial> {
    const dir = Path.dirname(url);

    const albedoUrl = Path.resolve(dir, config.albedo);
    const albedo = await Texture.load(albedoUrl);

    const normalUrl = Path.resolve(dir, config.normal);
    const normal = await Texture.load(normalUrl);

    const mraoUrl = Path.resolve(dir, config.mrao);
    const mrao = await Texture.load(mraoUrl);

    const pLightsPos = config.pLightsPos;
    const pLightsCols = config.pLightsCols;
    const dLightDir = config.dLightDir;
    const dLightCol = config.dLightCol;

    return new PBRMaterial(
      albedo, normal, mrao,
      pLightsPos, pLightsCols, dLightDir, dLightCol
    );
  }
}

materialLoaderMap.set('PBRMaterial', PBRMaterial.loadFromConfig);
