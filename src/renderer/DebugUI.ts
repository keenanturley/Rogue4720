import FrameTimePanel from '../ui/FrameTimePanel';
import ScenePanel from '../ui/scene-panel/ScenePanel';
import Renderer from './Renderer';

export default class DebugUI {
  renderer: Renderer;

  container: HTMLElement;

  frameTimePanel?: FrameTimePanel;

  scenePanel?: ScenePanel;

  private isVisible: boolean;

  constructor(renderer: Renderer, container: HTMLElement, isVisible: boolean = false) {
    this.renderer = renderer;
    this.container = container;
    this.isVisible = isVisible;

    if (this.isVisible) {
      this.show();
    }

    const toggleInputCallback = (ev) => {
      if (ev.key === '.') {
        this.toggleVisibility();
      }
    };
    window.addEventListener('keydown', toggleInputCallback);

    if (module.hot) {
      module.hot.dispose(() => {
        this.hide();
        window.removeEventListener('keydown', toggleInputCallback);
      });
    }
  }

  show() {
    this.bindFrameTimePanel();
    this.bindScenePanel();
    this.isVisible = true;
  }

  hide() {
    this.unbindFrameTimePanel();
    this.unbindScenePanel();
    this.isVisible = false;
  }

  toggleVisibility() {
    if (this.isVisible) {
      this.hide();
    } else {
      this.show();
    }
  }

  private bindFrameTimePanel() {
    this.frameTimePanel = new FrameTimePanel(this.renderer);
    document.body.appendChild(this.frameTimePanel.element);
  }

  private unbindFrameTimePanel() {
    if (this.frameTimePanel) {
      document.body.removeChild(this.frameTimePanel.element);
      this.frameTimePanel.cleanUp();
      this.frameTimePanel = null;
    }
  }

  private bindScenePanel() {
    this.scenePanel = new ScenePanel(this.renderer);
    this.container.appendChild(this.scenePanel);
  }

  private unbindScenePanel() {
    if (this.scenePanel) {
      this.container.removeChild(this.scenePanel);
      this.scenePanel = null;
    }
  }
}
