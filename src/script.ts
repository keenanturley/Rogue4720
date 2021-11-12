import * as twgl from 'twgl.js';
import Material from './renderer/Material';
import Mesh from './renderer/Mesh';
import MeshNode from './renderer/MeshNode';
import PerspectiveCamera from './renderer/PerspectiveCamera';
import Renderer from './renderer/Renderer';
import Scene from './renderer/Scene';
import Shader from './renderer/Shader';
import Transform from './renderer/Transform';

(async () => {
  const canvas = document.getElementById('canvas') as HTMLCanvasElement;
  const gl = canvas.getContext('webgl2');

  // Create Shader and Material
  const vs = await import('./shaders/test.vert') as string;
  const fs = await import('./shaders/test.frag') as string;
  const shader = new Shader(vs, fs);
  const material = new Material(shader);

  // Create Mesh and MeshNode
  const cubeArrays = twgl.primitives.createCubeVertices(5);
  const mesh = new Mesh(
    cubeArrays.position,
    cubeArrays.normal,
    cubeArrays.texcoord,
    cubeArrays.indices,
  );
  const meshNode = new MeshNode(new Transform([0.0, 0.0, -10.0], [0.0, 0.0, 0.0]), mesh, material);

  // Create a Scene and insert the MeshNode as the root
  const scene = new Scene(meshNode);

  // Create a Camera to view the scene with
  const camera = new PerspectiveCamera();

  // Create the renderer and begin rendering
  const preRender = () => {
    camera.aspect = gl.canvas.width / gl.canvas.height;
    meshNode.localTransform.rotation = twgl.v3.add(
      meshNode.localTransform.rotation,
      [1.0, 1.0, 1.0],
    );
  };
  const renderer = new Renderer(gl, scene, camera, preRender);

  // During development, stop rendering after the module is refreshed
  // @ts-ignore module.hot is a Parcel construct
  module.hot.dispose(() => {
    renderer.stopRendering();
  });

  // Begin rendering
  requestAnimationFrame((time) => {
    renderer.render(time);
  });
})();
