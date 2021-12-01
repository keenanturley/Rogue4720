import { Material } from './materials/_MaterialInternal';
import Mesh from './Mesh';
import SceneNode from './SceneNode';
import Transform from './Transform';

export default class MeshNode extends SceneNode {
  mesh: Mesh;

  material: Material;

  static numMeshNodes = 0;

  constructor(
    transform: Transform = new Transform(),
    mesh: Mesh,
    material: Material,
    name?: string,
  ) {
    const defaultName = `meshNode#${MeshNode.numMeshNodes}`;
    let computedName: string;
    if (name) {
      computedName = name;
    } else if (mesh.name) {
      computedName = `${mesh.name}-${defaultName}`;
    } else {
      computedName = defaultName;
    }

    super(computedName, transform);

    this.mesh = mesh;
    this.material = material;

    MeshNode.numMeshNodes += 1;
  }
}
