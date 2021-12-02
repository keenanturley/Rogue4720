import * as twgl from 'twgl.js';
import PerspectiveCamera from './renderer/PerspectiveCamera';
import Renderer from './renderer/Renderer';
import Scene from './renderer/Scene';
import Game from './game/Game';
import Model from './renderer/Model';
import Grid from './game/Grid';
import './style.css';

import Transform from './renderer/Transform';
import DebugUI from './renderer/DebugUI';

(async () => {
  const appWrapper = document.getElementById('app');
  const canvas = document.getElementById('canvas') as HTMLCanvasElement;
  const gl = canvas.getContext('webgl2');

  const raymanModel = await Model.load('/assets/Rayman/model.json');

  const modelNode = raymanModel.createModelNode(new Transform([0.0, -5.0, -20]));
  const modelNode2 = raymanModel.createModelNode(new Transform([10, -5.0, -20]));
  const modelNode3 = raymanModel.createModelNode(new Transform([-10, -5.0, -20]));

  // Create a Scene and insert the MeshNode as the root
  const scene = new Scene();
  scene.addNode(modelNode);
  scene.addNode(modelNode2);
  scene.addNode(modelNode3);

  // Generate grid
  const grid = new Grid(scene);

  // Create the game logic handler
  const game = new Game(grid);

  // Create a Camera to view the scene with
  const camera = new PerspectiveCamera(
    new Transform([-5, -10, -5], [20, 40, 0]),
  );

  // Create the renderer and begin rendering
  const preRender = () => {
    camera.aspect = gl.canvas.width / gl.canvas.height;
    modelNode.localTransform.rotation = twgl.v3.add(
      modelNode.localTransform.rotation,
      [1.0, 1.0, 1.0],
    );
  };
  const renderer = new Renderer(gl, scene, camera, preRender);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const debugUI = new DebugUI(renderer, appWrapper);

  // Begin rendering
  requestAnimationFrame((time) => {
    renderer.render(time);
  });

  if (module.hot) {
    module.hot.dispose(() => {
      game.stopGame();
      renderer.stopRendering();
    });
    module.hot.accept();
  }
})();
