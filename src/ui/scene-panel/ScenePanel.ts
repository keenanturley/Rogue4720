import Renderer from '../../renderer/Renderer';
import ScenePanelHeader from './ScenePanelHeader';
import ScenePanelList from './ScenePanelList';

export default class ScenePanel extends HTMLElement {
  renderer: Renderer;

  header: ScenePanelHeader;

  list: ScenePanelList;

  constructor(renderer: Renderer) {
    super();
    this.renderer = renderer;

    this.header = new ScenePanelHeader();
    this.appendChild(this.header);

    this.list = new ScenePanelList(this.renderer.scene);
    this.appendChild(this.list);
  }
}
customElements.define('scene-panel', ScenePanel);
