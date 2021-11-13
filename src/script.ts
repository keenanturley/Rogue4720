import * as twgl from 'twgl.js';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
import { Mesh as THREEMesh } from 'three';
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
  const loader = new OBJLoader();
  const model = await loader.loadAsync('https://static.observableusercontent.com/files/c1fc0d2fbf2bed5669afae79d4c0e896701b9e7257924c92a873b376bb2e65d7c217aeb899c11088d648cf89535a89089cdabff9da336ba7e6a739dd5e20a5cf');
  const { children } = model;
  const meshNodes = children
    .filter((child) => child instanceof THREEMesh)
    .map((child) => {
      const { geometry } = child as THREEMesh;
      return new Mesh(
        new Float32Array(geometry.getAttribute('position').array),
        new Float32Array(geometry.getAttribute('normal').array),
        new Float32Array(geometry.getAttribute('uv').array),
      );
    })
    .map((mesh) => new MeshNode(new Transform([0.0, -5, -25.0]), mesh, material));

  // const cubeArrays = twgl.primitives.createCubeVertices(5);
  // const mesh = new Mesh(
  //   cubeArrays.position,
  //   cubeArrays.normal,
  //   cubeArrays.texcoord,
  //   cubeArrays.indices,
  // );
  // const meshNode = new MeshNode(new Transform([0.0, 0.0, -24.0], [0.0, 0.0, 0.0]), mesh, material);

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
