import SceneNode from './SceneNode';

export default class Scene {
  root: SceneNode;

  constructor(root: SceneNode = new SceneNode()) {
    this.root = root;
  }

  /**
     * Adds a node to the root node of this Scene.
     *
     * Lazy way of doing `scene.root.addChild()`.
     */
  addNode(node: SceneNode) {
    this.root.addChild(node);
  }
}
