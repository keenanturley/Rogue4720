import GamePanel from './ui/game/GamePanel';
import Game from './game/Game';
import './style.css';
import DebugUI from './renderer/DebugUI';

(async () => {
  const appWrapper = document.getElementById('app');
  const canvas = document.getElementById('canvas') as HTMLCanvasElement;
  const gl = canvas.getContext('webgl2');

  // Create the game logic handler
  const game = new Game(gl);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const debugUI = new DebugUI(game.renderer, appWrapper);

  if (module.hot) {
    module.hot.dispose(() => {
      game.stopGame();
    });
    module.hot.accept();
  }
})();
