import Transform from './Transform';

/**
 * Base class for nodes that inhabit a {@link Scene}
 *
 * SceneNodes can have children of the same type, which forms the basis of a Scene Graph
 */
export default class SceneNode {
  // Possible abstraction: Make Postion, Rotation, and Scale their own classes,
  // or make our own Vec3 class that has more options so we aren't working with a raw
  // Float32Array.

  // This node's transform is relative to its parent
  localTransform: Transform;

  // These are private because they shouldn't be modified by users.
  // Parent is set when adding children to nodes.
  private parent?: SceneNode;

  private children: Set<SceneNode>;

  /**
     * Creates a new SceneNode with the given transform data
     * @param position
     * @param rotation
     * @param scale
     */
  constructor(localTransform: Transform = new Transform()) {
    this.localTransform = localTransform;

    this.children = new Set<SceneNode>();
  }

  public get Parent(): SceneNode {
    return this.parent;
  }

  public get Children(): Set<SceneNode> {
    return this.children;
  }

  public get Transform() {
    return this.localTransform;
  }

  addChild(node: SceneNode) {
    if (node.parent) {
      node.parent.removeChild(node);
    }

    node.parent = this;
    this.children.add(node);
  }

  removeChild(node: SceneNode) {
    if (!this.children.has(node)) {
      return;
    }

    node.parent = null;
    this.children.delete(node);
  }
}
