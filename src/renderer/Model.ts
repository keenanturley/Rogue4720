import { Group, Mesh as THREEMesh } from 'three';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
import Mesh from './Mesh';
import MeshNode from './MeshNode';
import Transform from './Transform';
import Material from './Material';

/**
 * Class that holds model data, it is implemented to the professor's
 * obeservable page on loading models using Three.js.
 */
export default class Model {
  private m_meshNodes: MeshNode[];

  private m_material: Material;

  constructor(model_path: string, meshNodes: MeshNode[], material: Material) {
    this.m_material = material;

    this.m_meshNodes = meshNodes;
  }

  get MeshNodes(): MeshNode[] {
    return this.m_meshNodes;
  }

  static createMeshArray(model: Group, material: Material): MeshNode[] {
    const { children } = model;
    const meshNodes = children.filter((child) => child instanceof THREEMesh)
      .map((child) => {
        const { geometry } = child as THREEMesh;
        return new Mesh(
          new Float32Array(geometry.getAttribute('position').array),
          new Float32Array(geometry.getAttribute('normal').array),
          new Float32Array(geometry.getAttribute('uv').array),
        );
      })
      .map((mesh) => new MeshNode(new Transform([0.0, -5, -25.0]), mesh, material));

    return meshNodes;
  }

  public static async fromURL(model_url: string, material: Material): Promise<Model> {
    const loader = new OBJLoader();
    const loadedModel = await loader.loadAsync(model_url);
    const meshNodes = Model.createMeshArray(loadedModel, material);

    return new Model(model_url, meshNodes, material);
  }
}
