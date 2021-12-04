/* eslint-disable import/no-cycle */
import Game from '../../game/Game';

export default class PlayerPane extends HTMLElement {
  titleElement: HTMLDivElement;

  statsElement: HTMLDivElement;

  equippedWeaponElement: HTMLDivElement;

  constructor(private game: Game) {
    super();

    this.className = 'game-pane';

    this.titleElement = PlayerPane.createTitleElement();
    this.appendChild(this.titleElement);

    const statsLabel = document.createElement('div');
    statsLabel.innerHTML = '<strong>Stats:</strong>';
    this.appendChild(statsLabel);

    this.statsElement = PlayerPane.createStatsElement();
    this.appendChild(this.statsElement);

    const equippedWeaponLabel = document.createElement('div');
    equippedWeaponLabel.className = 'player-pane-equip-label';
    equippedWeaponLabel.innerHTML = '<strong>Equipped Weapon:</strong>';
    this.appendChild(equippedWeaponLabel);

    this.equippedWeaponElement = PlayerPane.createEquippedWeaponElement();
    this.appendChild(this.equippedWeaponElement);
  }

  static createTitleElement(): HTMLDivElement {
    const element = document.createElement('div');
    element.className = 'pane-title';
    element.innerText = 'Player';
    return element;
  }

  static createStatsElement(): HTMLDivElement {
    const element = document.createElement('div');
    element.className = 'player-pane-stats';
    return element;
  }

  static createEquippedWeaponElement(): HTMLDivElement {
    const element = document.createElement('div');
    element.className = 'player-pane-equipped-weapon';
    return element;
  }

  update() {
    this.statsElement.innerText = `${this.game.player.stringRepresentation()}`;

    if (this.game.player.equippedWeapon) {
      this.equippedWeaponElement.innerText = this.game.player.equippedWeapon.stringRepresentation();
    } else {
      this.equippedWeaponElement.innerText = 'None';
    }
  }
}

customElements.define('player-pane', PlayerPane);
