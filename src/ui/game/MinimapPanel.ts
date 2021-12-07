// eslint-disable-next-line import/no-cycle
import Game from '../../game/Game';

export default class MinimapPanel extends HTMLElement {
  static className = 'minimap-panel';

  frameTimeUpdateIntervalId: ReturnType<typeof setTimeout>;

  isVisible: boolean = true;

  constructor(public game: Game) {
    super();

    this.className = MinimapPanel.className;

    // mount self
    document.getElementById('app').appendChild(this);

    // Bind toggle keybind
    window.addEventListener('keydown', (ev) => {
      if (ev.key === 'm') this.toggleVisibility();
    });

    if (module.hot) {
      module.hot.dispose(() => {
        this.parentNode.removeChild(this);
      });
    }
  }

  toggleVisibility() {
    if (this.isVisible) {
      this.style.display = 'none';
      this.isVisible = false;
      return;
    }
    this.style.display = '';
    this.isVisible = true;
  }

  update() {
    const mapString = this.game.grid.stringRepresentation();
    this.innerText = mapString;
  }
}

customElements.define('minimap-panel', MinimapPanel);
