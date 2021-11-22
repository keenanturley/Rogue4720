import Scene from '../../renderer/Scene';
import ScenePanelListNode from './ScenePanelListNode';

export default class ScenePanelList extends HTMLElement {
  scene: Scene;

  constructor(scene: Scene) {
    super();

    this.scene = scene;

    this.updateList();
  }

  updateList() {
    const nodes = Array.from(this.scene.root.getChildren());
    nodes.forEach((node) => {
      this.appendChild(new ScenePanelListNode(node));
    });
  }
}
customElements.define('scene-panel-list', ScenePanelList);
