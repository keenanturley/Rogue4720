/* eslint-disable import/no-cycle */
import Game from '../../game/Game';

type Control = { label: string, action: string };

const controls: Array<Control> = [
  { label: 'W', action: 'Move forward' },
  { label: 'A', action: 'Move left' },
  { label: 'S', action: 'Move backward' },
  { label: 'D', action: 'Move right' },
  { label: 'Q', action: 'Attack adjacent tiles' },
  { label: 'I', action: 'Toggle inventory' },
  { label: '1-9', action: 'Use inventory slot item' },
  { label: 'M', action: 'Toggle Map' },
  { label: '.', action: 'Toggle debug mode' },
  { label: ',', action: 'Toggle free camera' },
  { label: 'h', action: 'Free camera move left' },
  { label: 'j', action: 'Free camera move backward' },
  { label: 'k', action: 'Free camera move forward' },
  { label: 'l', action: 'Free camera move right' },
  { label: '[', action: 'Free camera move down' },
  { label: ']', action: 'Free camera move up' },
  { label: '\\', action: 'Re-generate map (not recommended)' },
];

export default class ControlsPane extends HTMLElement {
  titleElement: HTMLDivElement;

  statsElement: HTMLDivElement;

  equippedWeaponElement: HTMLDivElement;

  constructor(private game: Game) {
    super();

    this.className = 'game-pane';

    this.titleElement = ControlsPane.createTitleElement();
    this.appendChild(this.titleElement);

    const controlsElements = controls.map(({ label, action }) => {
      const element = document.createElement('div');
      element.innerHTML = `<strong>${label}:</strong> ${action}`;
      return element;
    });
    this.append(...controlsElements);
  }

  static createTitleElement(): HTMLDivElement {
    const element = document.createElement('div');
    element.className = 'pane-title';
    element.innerText = 'Controls';
    return element;
  }
}

customElements.define('controls-pane', ControlsPane);
