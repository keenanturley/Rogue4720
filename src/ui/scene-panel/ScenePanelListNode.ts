import SceneNode from '../../renderer/SceneNode';

export default class ScenePanelListNode extends HTMLElement {
  level: number;

  sceneNode: SceneNode;

  wrapper: HTMLDivElement;

  expandButton: HTMLDivElement;

  childrenNodes: Array<ScenePanelListNode>;

  isOpen: boolean = false;

  constructor(sceneNode: SceneNode, level: number = 0) {
    super();

    this.sceneNode = sceneNode;
    this.level = level;

    this.style.paddingLeft = `${this.level * 0.5}rem`;

    this.wrapper = document.createElement('div');
    this.wrapper.className = 'node-wrapper';
    this.appendChild(this.wrapper);

    // Create collapsible button
    this.expandButton = document.createElement('div');
    this.expandButton.className = 'expand-button';
    if (sceneNode.getChildren().size > 0) {
      this.expandButton.innerText = '+';
      this.expandButton.addEventListener('click', () => {
        this.isOpen = !this.isOpen;
        this.update();
      });
    } else {
      this.expandButton.innerText = ' ';
    }
    this.wrapper.append(this.expandButton);

    // Create label
    const label = document.createElement('div');
    label.innerText = `${this.sceneNode.name} : ${this.sceneNode.constructor.name}`;
    this.wrapper.append(label);

    if (module.hot) {
      module.hot.dispose(() => this.parentNode.removeChild(this));
    }
  }

  update() {
    this.expandButton.innerText = this.isOpen ? '-' : '+';
    // Create children wrapper
    if (this.isOpen) {
      const nodes = Array.from(this.sceneNode.getChildren());
      this.childrenNodes = nodes.map((node) => new ScenePanelListNode(node, this.level + 1));
      this.append(...this.childrenNodes);
    } else {
      this.replaceChildren(this.wrapper);
    }
  }
}

customElements.define('scene-panel-list-node', ScenePanelListNode);
