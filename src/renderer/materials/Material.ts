import * as Path from 'path';
import Shader from '../Shader';

export type MaterialType =
  'Material'
  | 'AlbedoMaterial'
  | 'BaseColorMaterial';

type LoaderFunction = (url:string, config: object) => Promise<Material>;

export const materialLoaderMap: Map<MaterialType, LoaderFunction> = new Map();

export interface BaseMaterialResourceSchema {
  type: MaterialType;
}

interface ResourceSchema extends BaseMaterialResourceSchema {
  type: 'Material';
  shader: string;
  uniforms: object;
}

/**
 * Base class for a custom Material. Meant to be subclassed to create
 * tailored materials that are customized via a few exposed uniforms.
 */
export class Material<UniformsType extends object = object> {
  static cache = new Map<string, Material>();

  static type: MaterialType = 'Material';

  shader: Shader;

  uniforms: UniformsType;

  constructor(shader: Shader, uniforms: UniformsType) {
    this.shader = shader;
    this.uniforms = uniforms;
  }

  static async load(url: string): Promise<Material> {
    if (this.cache.has(url)) {
      return this.cache.get(url);
    }

    const configRequest = await fetch(url);
    const materialConfig = (await configRequest.json()) as BaseMaterialResourceSchema;

    if (!materialLoaderMap.has(materialConfig.type)) {
      throw new Error('No material loader found for given material type.');
    }
    const loaderFunction = materialLoaderMap.get(materialConfig.type);
    const material = await loaderFunction(url, materialConfig);

    this.cache.set(url, material);
    return material;
  }

  // Can't use ResourceSchema as config type here because it prevents
  // subclasses from using their own ResourceSchema type. >:(
  static async loadFromConfig(url: string, config: object): Promise<Material> {
    const materialConfig = config as ResourceSchema;

    const dir = Path.dirname(url);
    const shaderUrl = Path.resolve(dir, materialConfig.shader);

    const shader = await Shader.load(shaderUrl);

    const { uniforms } = materialConfig;

    return new Material(shader, uniforms);
  }
}

materialLoaderMap.set('Material', Material.loadFromConfig);
