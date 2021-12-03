import Transform from './Transform';

/**
 * Base class for nodes that inhabit a {@link Scene}
 *
 * SceneNodes can have children of the same type, which forms the basis of a Scene Graph
 */
export default class SceneNode {
  // This node's transform is relative to its parent
  localTransform: Transform;

  name: string;

  // These are private because they shouldn't be modified by users.
  // Parent is set when adding children to nodes.
  private parent?: SceneNode;

  private children: Set<SceneNode>;

  // Counter for the number of scene nodes created this session
  private static sceneNodes: number = 0;

  constructor(name?: string, localTransform: Transform = new Transform()) {
    this.localTransform = localTransform;

    this.name = name ?? `sceneNode#${SceneNode.sceneNodes}`;

    this.children = new Set<SceneNode>();

    SceneNode.sceneNodes += 1;
  }

  getParent(): SceneNode {
    return this.parent;
  }

  getChildren(): Set<SceneNode> {
    return this.children;
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

  removeSelf() {
    this.getParent().removeChild(this);
  }
}
