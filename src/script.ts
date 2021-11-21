import * as twgl from 'twgl.js';
import PerspectiveCamera from './renderer/PerspectiveCamera';
import Renderer from './renderer/Renderer';
import Scene from './renderer/Scene';
import Model from './renderer/Model';
// import BaseColorMaterial from './renderer/BaseColorMaterial';
import AlbedoMaterial from './renderer/AlbedoMaterial';
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
  const material = new AlbedoMaterial(new Texture(gl, 'https://static.observableusercontent.com/files/0e7b80379c6272e6e0431669f855b19032a3d1e856b7900215569c92218c31a22c0c6906e2ce2c56dcd68608bd566170744724d008d59d8cf04fa3803f318a54'));

  // Create Mesh and MeshNode
  // ! Debug test for model loading data
  const testModel = await Model.fromURL(
    'https://static.observableusercontent.com/files/c1fc0d2fbf2bed5669afae79d4c0e896701b9e7257924c92a873b376bb2e65d7c217aeb899c11088d648cf89535a89089cdabff9da336ba7e6a739dd5e20a5cf',
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
