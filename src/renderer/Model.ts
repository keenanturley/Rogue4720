import { Group, Mesh as THREEMesh } from 'three';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
import Mesh from './Mesh';
import MeshNode from './MeshNode';
import Transform from './Transform';
import Material from './materials/Material';
import ModelNode from './ModelNode';

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
  readonly meshes: Array<Mesh>;

  readonly material: Material;

  constructor(model_path: string, meshes: Array<Mesh>, material: Material) {
    this.meshes = meshes;
    this.material = material;
  }

  createModelNode(transform: Transform = new Transform()): ModelNode {
    const modelNode = new ModelNode(this, transform);

    this.meshes.forEach((mesh) => {
      const meshNode = new MeshNode(new Transform(), mesh, this.material);
      modelNode.addChild(meshNode);
    });

    return modelNode;
  }

  static createMeshArray(model: Group, material: Material): Array<Mesh> {
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
        );
      });

    return meshes;
  }

  public static async fromURL(model_url: string, material: Material): Promise<Model> {
    const loader = new OBJLoader();
    const loadedModel = await loader.loadAsync(model_url);
    const meshNodes = Model.createMeshArray(loadedModel, material);

    return new Model(model_url, meshNodes, material);
  }
}
