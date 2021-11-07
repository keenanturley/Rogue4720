import Material from './Material';
import Mesh from './Mesh';
import SceneNode from './SceneNode';
import Transform from './Transform';

export default class MeshNode extends SceneNode {
  mesh: Mesh;

  material: Material;

  constructor(
    transform: Transform = new Transform(),
    mesh: Mesh,
    material: Material,
  ) {
    super(transform);

    this.mesh = mesh;
    this.material = material;
  }
}
