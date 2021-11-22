import type Model from './Model';
import SceneNode from './SceneNode';
import Transform from './Transform';

/**
 * A simple node type that represents a scene instance of a Model.
 *
 * This node will contain MeshNode children that were loaded from
 * the meshes of the Model.
 */
export default class ModelNode extends SceneNode {
  model: Model;

  static numModelNodes: number = 0;

  constructor(model: Model, transform: Transform, name = `modelNode#${ModelNode.numModelNodes}`) {
    super(name, transform);
    this.model = model;

    ModelNode.numModelNodes += 1;
  }
}
