/* eslint-disable import/no-cycle */
import Game from '../../game/Game';

export default class GameLogPane extends HTMLElement {
  titleElement: HTMLDivElement;

  messageElement: HTMLDivElement;

  constructor(private game: Game) {
    super();

    this.classList.add('game-pane', 'game-log-pane');

    this.titleElement = GameLogPane.createTitleElement();
    this.appendChild(this.titleElement);

    this.messageElement = document.createElement('div');
    this.appendChild(this.messageElement);
  }

  static createTitleElement(): HTMLDivElement {
    const element = document.createElement('div');
    element.className = 'pane-title';
    element.innerText = 'Game Log';
    return element;
  }

  update() {
    this.messageElement.innerText = this.game.message;
  }
}

customElements.define('game-log-pane', GameLogPane);
