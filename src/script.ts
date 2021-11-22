import * as twgl from 'twgl.js';
import PerspectiveCamera from './renderer/PerspectiveCamera';
import Renderer from './renderer/Renderer';
import Scene from './renderer/Scene';
import Model from './renderer/Model';
// import BaseColorMaterial from './renderer/materials/BaseColorMaterial';
import AlbedoMaterial from './renderer/materials/AlbedoMaterial';
// import Color from './renderer/Color';
import Texture from './renderer/Texture';
import Game from './game/Game';
import DebugPanel from './elements/DebugPanel';
import './style.css';

const PLACEHOLDER_MAP: string = `
  |||||  
|||...|||
|...@...|
|||...|||
  |||||  
`.slice(1, -1);

(async () => {
  const canvas = document.getElementById('canvas') as HTMLCanvasElement;
  const gl = canvas.getContext('webgl2');

  // Generate map
  const map = PLACEHOLDER_MAP;

  // Create the game logic handler
  const game = new Game(map);

  // Create Shader and Material
  const material = new AlbedoMaterial(new Texture(gl, new URL('../Assets/Textures/Rayman.png', import.meta.url).toString()));

  // Create Mesh and MeshNode
  const testModel = await Model.fromURL(
    new URL('../Assets/Models/raymanModel.obj', import.meta.url).toString(),
    material,
  );
  const meshNodes = testModel.MeshNodes;

  // Create a Scene and insert the MeshNode as the root
  const scene = new Scene();
  meshNodes.forEach((node) => scene.addNode(node));

  // Create a Camera to view the scene with
  const camera = new PerspectiveCamera();

  // Create the renderer and begin rendering
  const preRender = () => {
    camera.aspect = gl.canvas.width / gl.canvas.height;
    meshNodes.forEach((meshNode) => {
      meshNode.localTransform.rotation = twgl.v3.add(
        meshNode.localTransform.rotation,
        [1.0, 1.0, 1.0],
      );
    });
  };
  const renderer = new Renderer(gl, scene, camera, preRender);

  // Create DebugPanel
  const debugPanel = new DebugPanel(renderer);
  document.body.appendChild(debugPanel.element);

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
