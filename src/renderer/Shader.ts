import { createProgramInfo, ProgramInfo } from 'twgl.js';

export default class Shader {
  vertexShader: string;

  fragmentShader: string;

  programInfo?: ProgramInfo;

  constructor(vertexShader: string, fragmentShader: string) {
    this.vertexShader = vertexShader;
    this.fragmentShader = fragmentShader;
  }

  static async fromURLs(vertexShaderURL: string, fragmentShaderURL: string): Promise<Shader> {
    let request = await fetch(vertexShaderURL);
    if (!request.ok) {
      throw Error(
        `Couldn't fetch vertex shader from URL: ${vertexShaderURL}, Status: ${request.statusText}`,
      );
    }

    const vertexShader = await request.text();

    request = await fetch(fragmentShaderURL);
    if (!request.ok) {
      throw Error(
        `Couldn't fetch fragment shader from URL: ${fragmentShaderURL}, Status: ${request.statusText}`,
      );
    }

    const fragmentShader = await request.text();

    return new Shader(vertexShader, fragmentShader);
  }

  /**
   * Gets the ProgramInfo object created from the compilation of this Shader.
   * If the ProgramInfo hasn't been created yet, this will create and cache it.
   *
   * @param gl WebGL context
   * @returns Compiled shader linked to a program
   */
  getProgramInfo(gl: WebGLRenderingContext): ProgramInfo {
    if (!this.programInfo) {
      this.programInfo = createProgramInfo(gl, [this.vertexShader, this.fragmentShader]);
    }
    return this.programInfo;
  }
}
