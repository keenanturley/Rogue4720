import * as twgl from 'twgl.js';
import PerspectiveCamera from './renderer/PerspectiveCamera';
import Renderer from './renderer/Renderer';
import Scene from './renderer/Scene';
import Model from './renderer/Model';
import PBRMaterial from './renderer/materials/PBRMaterial';
import Texture from './renderer/Texture';
import Game from './game/Game';
import './style.css';
import raymanTexture from '../Assets/Textures/Rayman.png';
import raymanModel from '../Assets/Models/raymanModel.obj';
import metalNormal from '../Assets/Textures/veins_normal.png';
import metalMrao from '../Assets/Textures/rusted_metal_mrao.png';
import Transform from './renderer/Transform';
import DebugUI from './renderer/DebugUI';

const PLACEHOLDER_MAP: string = `
  |||||  
|||...|||
|...@...|
|||...|||
  |||||  
`.slice(1, -1);

(async () => {
  const appWrapper = document.getElementById('app');
  const canvas = document.getElementById('canvas') as HTMLCanvasElement;
  const gl = canvas.getContext('webgl2');

  // Generate map
  const map = PLACEHOLDER_MAP;

  // Create the game logic handler
  const game = new Game(map);

  // placeholder directional light
  const dLightDirection: number[] = [-300.0, 35.0, 10];

  const dLightColor: number[] = [100, 50, 20];

  // placeholder point lights and their colors
  // !WebGL does not like arrays of arrays, instead use a single array
  const pLightPositions: number[] = [
    -10.0, 10.0, 10.0,
    10.0, 10.0, 10.0,
    -10.0, -10.0, 10.0,
    10.0, -10.0, 10.0,
  ];

  const pLightColors: number[] = [
    300.0, 300.0, 300.0,
    300.0, 300.0, 300.0,
    300.0, 300.0, 300.0,
    300.0, 300.0, 300.0,
  ];

  // Create Shader and Material
  const material = new PBRMaterial(
    new Texture(gl, raymanTexture), new Texture(gl, metalNormal), new Texture(gl, metalMrao),
    pLightPositions, pLightColors, dLightDirection, dLightColor,
  );

  // Create Mesh and MeshNode
  const testModel = await Model.fromURL(
    raymanModel,
    material,
    'rayman',
  );
  const modelNode = testModel.createModelNode(new Transform([0.0, -5.0, -20]));
  const modelNode2 = testModel.createModelNode(new Transform([10, -5.0, -20]));
  const modelNode3 = testModel.createModelNode(new Transform([-10, -5.0, -20]));

  // Create a Scene and insert the MeshNode as the root
  const scene = new Scene();
  scene.addNode(modelNode);
  scene.addNode(modelNode2);
  scene.addNode(modelNode3);

  // Create a Camera to view the scene with
  const camera = new PerspectiveCamera();

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
