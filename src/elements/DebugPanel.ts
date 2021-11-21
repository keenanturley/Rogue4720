import Renderer from '../renderer/Renderer';

export default class DebugPanel {
  static className = 'debug-panel';

  renderer: Renderer;

  element: HTMLDivElement;

  constructor(renderer: Renderer) {
    this.renderer = renderer;
    this.element = document.createElement('div');

    this.element.className = DebugPanel.className;

    const frameTimeUpdate = setInterval(() => {
      this.element.innerText = `Frame time: ${this.renderer.frameTime} ms`;
    }, 30 / 1000);

    if (module.hot) {
      module.hot.dispose(() => {
        clearInterval(frameTimeUpdate);
        this.element.parentNode.removeChild(this.element);
      });
    }
  }
}
