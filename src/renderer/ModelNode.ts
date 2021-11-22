import Model from "./Model";
import SceneNode from "./SceneNode";
import Transform from "./Transform";

/**
 * A simple node type that represents a scene instance of a Model.
 * 
 * This node will contain MeshNode children that were loaded from 
 * the meshes of the Model.
 */
export default class ModelNode extends SceneNode {
  model: Model;

  constructor(model: Model, transform: Transform) {
    super(transform);
    this.model = model;
  }
}
