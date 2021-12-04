/* eslint-disable import/no-cycle */
// DON'T CARE IM GOING FAST
import Game from '../../game/Game';
import ControlsPane from './ControlsPane';
import GameLogPane from './GameLogPane';
import InventoryPane from './InventoryPane';
import PlayerPane from './PlayerPane';

export default class GamePanel extends HTMLElement {
  playerPane: PlayerPane;

  controlsPane: ControlsPane;

  inventoryPane: InventoryPane;

  gameLogPane: GameLogPane;

  constructor(public game: Game) {
    super();

    this.playerPane = new PlayerPane(game);
    this.appendChild(this.playerPane);

    this.controlsPane = new ControlsPane(game);
    this.appendChild(this.controlsPane);

    this.inventoryPane = new InventoryPane(game);
    this.appendChild(this.inventoryPane);

    this.gameLogPane = new GameLogPane(game);
    this.appendChild(this.gameLogPane);

    // Mount self
    document.getElementById('app').appendChild(this);

    this.update();

    // if (module.hot) {
    //   module.hot.dispose(() => this.dispose());
    // }
  }

  update() {
    this.playerPane.update();
    this.inventoryPane.update();
    this.gameLogPane.update();
  }

  // dispose() {
  //   this.parentNode.removeChild(this);
  // }
}

customElements.define('game-panel', GamePanel);
