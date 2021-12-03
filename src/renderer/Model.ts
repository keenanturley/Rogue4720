import { Group, Mesh as THREEMesh } from 'three';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
import * as Path from 'path';
import Mesh from './Mesh';
import MeshNode from './MeshNode';
import Transform from './Transform';
import { Material } from './materials/_MaterialInternal';
import ModelNode from './ModelNode';
import ModelExtents from './ModelExtents';

type ResourceSchema = {
  type: 'Model';
  model: string; // Path to model (ex. 'assets/Rayman/rayman.obj')
  material: string; // Path to material config (ex. 'assets/Rayman/material.ts')
  name?: string; // Optional name for this model
};

/**
 * Class that holds model data.
 *
 * A Model instance is a structure containing the meshes and material
 * that should be applied to each mesh.
 *
 * There should only be one Model instance for each 3D model you
 * want to load in the game. You can use the `createModelNode`
 * method to generate a ModelNode with MeshNode children ready
 * for placement in a scene.
 *
 * NOTE: Currently only supports OBJ models.
 *
 * TODO: Support more than just OBJ models (probably GLTF / GLB first)
 */
export default class Model {
  static cache = new Map<string, Model>();

  static numModels = 0;

  readonly meshes: Array<Mesh>;

  readonly material: Material;

  readonly extents: ModelExtents;

  name: string;

  constructor(meshes: Array<Mesh>, material: Material, name?: string) {
    this.meshes = meshes;
    this.material = material;
    this.extents = this.calcModelExtents();

    this.name = name ?? `model#${Model.numModels}`;
    Model.numModels += 1;
  }

  createModelNode(transform: Transform = new Transform()): ModelNode {
    const modelNode = new ModelNode(this, transform, this.name);

    this.meshes.forEach((mesh) => {
      const meshNode = new MeshNode(new Transform(), mesh, this.material);
      modelNode.addChild(meshNode);
    });

    return modelNode;
  }

  private calcModelExtents(): ModelExtents {
    if (this.meshes.length < 1) {
      return {
        minX: 0,
        maxX: 0,
        minY: 0,
        maxY: 0,
        minZ: 0,
        maxZ: 0,
        xLen: 0,
        yLen: 0,
        zLen: 0,
      };
    }
    let minX = this.meshes[0].position[0];
    let maxX = this.meshes[0].position[0];
    let minY = this.meshes[0].position[1];
    let maxY = this.meshes[0].position[1];
    let minZ = this.meshes[0].position[2];
    let maxZ = this.meshes[0].position[2];

    this.meshes.forEach((mesh: Mesh) => {
      mesh.position.forEach((v: number, j: number) => {
        switch (j % 3) {
          case 0:
            if (v < minX) minX = v;
            else if (v > maxX) maxX = v;
            break;

          case 1:
            if (v < minY) minY = v;
            else if (v > maxY) maxY = v;
            break;

          case 2:
            if (v < minZ) minZ = v;
            else if (v > maxZ) maxZ = v;
            break;

          default:
            throw new Error('This shouldnt happen because...math');
        }
      });
    });

    return {
      minX,
      maxX,
      minY,
      maxY,
      minZ,
      maxZ,
      xLen: maxX - minX,
      yLen: maxY - minY,
      zLen: maxZ - minZ,
    };
  }

  static createMeshArray(model: Group): Array<Mesh> {
    const { children } = model;

    // Create meshes for the first level mesh children
    // TODO: (Low Priority) Support multi-level hierarchy of meshes? We might not need this
    const meshes = children.filter((child) => child instanceof THREEMesh)
      .map((child) => {
        const { geometry } = child as THREEMesh;
        return new Mesh(
          new Float32Array(geometry.getAttribute('position').array),
          new Float32Array(geometry.getAttribute('normal').array),
          new Float32Array(geometry.getAttribute('uv').array),
          null,
          child.name,
        );
      });

    return meshes;
  }

  public static async fromURL(
    model_url: string,
    material: Material,
    name?: string,
  ): Promise<Model> {
    const loader = new OBJLoader();
    const loadedModel = await loader.loadAsync(model_url);
    const meshNodes = Model.createMeshArray(loadedModel);

    return new Model(meshNodes, material, name);
  }

  static async load(url: string): Promise<Model> {
    if (this.cache.has(url)) {
      return this.cache.get(url);
    }
    const configRequest = await fetch(url);
    const modelConfig = (await configRequest.json()) as ResourceSchema;

    const dir = Path.dirname(url);

    // Load the model file
    const modelUrl = Path.resolve(dir, modelConfig.model);
    const loader = new OBJLoader();
    const loadedModel = await loader.loadAsync(modelUrl);
    const meshes = Model.createMeshArray(loadedModel);

    // Load the material
    const materialUrl = Path.resolve(dir, modelConfig.material);
    const material = await Material.load(materialUrl);

    const model = new Model(meshes, material, modelConfig.name);
    this.cache.set(url, model);
    return model;
  }
}
