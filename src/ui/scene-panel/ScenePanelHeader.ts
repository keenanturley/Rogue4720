export default class ScenePanelHeader extends HTMLElement {
  constructor() {
    super();

    this.innerText = 'Scene Hierarchy';
  }
}

customElements.define('scene-panel-header', ScenePanelHeader);
