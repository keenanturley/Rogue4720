import Renderer from '../renderer/Renderer';

export default class FrameTimePanel {
  static className = 'debug-panel';

  renderer: Renderer;

  element: HTMLDivElement;

  frameTimeUpdateIntervalId: ReturnType<typeof setTimeout>;

  constructor(renderer: Renderer) {
    this.renderer = renderer;
    this.element = document.createElement('div');

    this.element.className = FrameTimePanel.className;

    // Update the frame time 30 times per second
    this.frameTimeUpdateIntervalId = setInterval(() => {
      const timeString = this.renderer.frameTime.toFixed(2).padStart(6);
      this.element.textContent = `Frame time: ${timeString} ms`;
    }, 30 / 1000);

    if (module.hot) {
      module.hot.dispose(() => {
        clearInterval(this.frameTimeUpdateIntervalId);
        this.element.parentNode.removeChild(this.element);
      });
    }
  }

  cleanUp() {
    clearInterval(this.frameTimeUpdateIntervalId);
  }
}
