import { createProgramInfo, ProgramInfo } from 'twgl.js';
import * as Path from 'path';

type ResourceSchema = {
  type: 'Shader';
  vertexShader: string;
  fragmentShader: string;
};

export default class Shader {
  static cache = new Map<string, Shader>();

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

  static async load(url: string): Promise<Shader> {
    if (this.cache.has(url)) {
      return this.cache.get(url);
    }

    const configRequest = await fetch(url);
    const config = (await configRequest.json()) as ResourceSchema;

    const dir = Path.dirname(url);

    const vertexShaderPath = Path.resolve(dir, config.vertexShader);
    const fragmentShaderPath = Path.resolve(dir, config.fragmentShader);

    const shader = await Shader.fromURLs(vertexShaderPath, fragmentShaderPath);

    this.cache.set(url, shader);
    return shader;
  }
}
