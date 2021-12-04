import PerspectiveCamera from './renderer/PerspectiveCamera';
import Renderer, { Rendering } from './renderer/Renderer';
import Scene from './renderer/Scene';
import Game from './game/Game';
import Grid from './game/Grid';
import './style.css';

import Transform from './renderer/Transform';
import DebugUI from './renderer/DebugUI';

(async () => {
  const appWrapper = document.getElementById('app');
  const canvas = document.getElementById('canvas') as HTMLCanvasElement;
  const gl = canvas.getContext('webgl2');

  // Create a Scene and insert the MeshNode as the root
  const scene = new Scene();

  // Generate grid
  const grid = new Grid(scene);

  // Create the game logic handler
  const game = new Game(grid);

  // Create a Camera to view the scene with
  const camera = new PerspectiveCamera(
    new Transform([0, 2, 0], [-20, 0, 0]),
  );

  const cameraSpeed = 0.0;
  // Create the renderer and begin rendering
  const preRender = (deltaTime: number) => {
    const cameraDelta = cameraSpeed * (deltaTime / 1000);
    camera.transform.position[0] += cameraDelta;
    camera.aspect = gl.canvas.width / gl.canvas.height;
  };
  const renderer = new Renderer(gl, scene, camera, preRender);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const debugUI = new DebugUI(renderer, appWrapper);

  // Begin rendering
  requestAnimationFrame((time) => {
    renderer.depthMapRender(time);
    renderer.render(time, Rendering.normal);
  });

  if (module.hot) {
    module.hot.dispose(() => {
      game.stopGame();
      renderer.stopRendering();
    });
    module.hot.accept();
  }
})();
