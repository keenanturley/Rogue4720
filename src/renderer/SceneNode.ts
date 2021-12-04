import { m4, v3 } from 'twgl.js';
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

  // Traverses to root if ancestor is null
  getAncestorPosition(ancestor: SceneNode): v3.Vec3 {
    const nodeStack = [];
    let node: SceneNode = this;
    // The root will always be found
    let ancestorFound = ancestor === null;

    while (node != null) {
      nodeStack.push(node);

      if (node === ancestor) {
        ancestorFound = true;
        break;
      }
      node = node.getParent();
    }

    if (!ancestorFound) return null;

    // The stack will always at least have 1
    let position = nodeStack.pop().localTransform.position;
    while (nodeStack.length > 0) {
      node = nodeStack.pop();
      position = v3.add(position, node.localTransform.position);
    }

    return position;
  }

  // getAncestorPosition(ancestor: SceneNode): v3.Vec3 {
  //   const ancestorMatrix = this.getAncestorMatrix(ancestor);
  //   return ancestorMatrix.filter((v: number, i: number) => i !== 0 && (i + 1) % 4 === 0);
  // }

  // getWorldMatrix(): m4.Mat4 {
  //   return this.getAncestorMatrix(null);
  // }
  //
  getWorldPosition(): v3.Vec3 {
    return this.getAncestorPosition(null);
  }
}
