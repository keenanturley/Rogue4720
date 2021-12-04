import { v3 } from 'twgl.js';
// eslint-disable-next-line import/no-cycle
import { Material, BaseMaterialResourceSchema, materialLoaderMap } from './_MaterialInternal';
import Shader from '../Shader';
import Color from '../Color';

interface ResourceSchema extends BaseMaterialResourceSchema {
  type: 'BaseColorMaterial';
  // Color should be represented as in Color.fromHex()
  color: string;
}

const shaderUrl = '/assets/shaders/baseColor/shader.json';
const baseColorShader = await Shader.load(shaderUrl);

const DEFAULT_U_COLOR = v3.create(0.0, 0.0, 0.0);

interface BaseColorMaterialUniforms {
  u_color: v3.Vec3;
}

// eslint-disable-next-line import/prefer-default-export
export class BaseColorMaterial extends Material<BaseColorMaterialUniforms> {
  private color: Color;

  constructor(color: Color) {
    super(baseColorShader, { u_color: DEFAULT_U_COLOR });
    this.setColor(color);
  }

  setColor(color: Color) {
    this.color = color;
    this.uniforms.u_color = color.toVec3();
  }

  getColor(): Color {
    return this.color;
  }

  static async loadFromConfig(url: string, config: ResourceSchema): Promise<BaseColorMaterial> {
    const color = Color.fromHex(config.color);
    return new BaseColorMaterial(color);
  }
}

materialLoaderMap.set('BaseColorMaterial', BaseColorMaterial.loadFromConfig);
