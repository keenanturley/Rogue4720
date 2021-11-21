import Shader from '../Shader';

/**
 * Base class for a custom Material. Meant to be subclassed to create
 * tailored materials that are customized via a few exposed uniforms.
 */
export default class Material<UniformsType extends object = object> {
  shader: Shader;

  uniforms: UniformsType;

  constructor(shader: Shader, uniforms: UniformsType) {
    this.shader = shader;
    this.uniforms = uniforms;
  }
}
