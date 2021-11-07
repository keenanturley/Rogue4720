import Shader from './Shader';

/**
 * Base class for a custom Material. Meant to be subclassed to create
 * tailored materials that are customized via a few exposed uniforms.
 */
export default class Material {
  shader: Shader;

  uniforms: object;

  constructor(shader: Shader, uniforms: object = {}) {
    this.shader = shader;
    this.uniforms = uniforms;
  }
}