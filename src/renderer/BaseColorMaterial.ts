import { v3 } from 'twgl.js';
import Material from './Material';
import Shader from './Shader';
import baseColorVertexShader from '../shaders/baseColor.vert';
import baseColorFragmentShader from '../shaders/baseColor.frag';
import Color from './Color';

const baseColorShader = new Shader(baseColorVertexShader, baseColorFragmentShader);

const DEFAULT_U_COLOR = v3.create(0.0, 0.0, 0.0);

interface BaseColorMaterialUniforms {
  u_color: v3.Vec3;
}

export default class BaseColorMaterial extends Material<BaseColorMaterialUniforms> {
  private color: Color;

  constructor(color: Color) {
    super(baseColorShader, { u_color: DEFAULT_U_COLOR });
    this.color = color;
    this.setColor(this.color);
  }

  setColor(color: Color) {
    this.color = color;
    this.uniforms.u_color = color.toVec3();
  }

  getColor(): Color {
    return this.color;
  }
}
