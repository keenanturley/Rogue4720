import * as twgl from "twgl.js";
import PerspectiveCamera from "./renderer/PerspectiveCamera";
import Renderer from "./renderer/Renderer";
import Scene from "./renderer/Scene";
import Model from "./renderer/Model";
import BaseColorMaterial from "./renderer/BaseColorMaterial";
import Color from "./renderer/Color";
import Game from "./game/Game";

const PRINT_FPS: boolean = false;
const PLACEHOLDER_MAP: string = `
  |||||
|||...|||
|...@...|
|||...|||
  |||||
`.substring(1);

(async () => {
    const canvas = document.getElementById("canvas") as HTMLCanvasElement;
    const gl = canvas.getContext("webgl2");

    // Generate Map
    const map = PLACEHOLDER_MAP;

    // Create Shader and Material
    const material = new BaseColorMaterial(Color.fromHex("#302459"));

    // Create Mesh and MeshNode
    // ! Debug test for model loading data
    const test = await Model.fromURL(
        "https://static.observableusercontent.com/files/c1fc0d2fbf2bed5669afae79d4c0e896701b9e7257924c92a873b376bb2e65d7c217aeb899c11088d648cf89535a89089cdabff9da336ba7e6a739dd5e20a5cf",
        material
    );
    const meshNodes = test.MeshNodes;

    // Create a Scene and insert the MeshNode as the root
    const scene = new Scene();
    meshNodes.forEach((node) => scene.addNode(node));

    // Create a Camera to view the scene with
    const camera = new PerspectiveCamera();

    // Create the renderer
    const preRender = () => {
        camera.aspect = gl.canvas.width / gl.canvas.height;
        meshNodes.forEach((meshNode) => {
            meshNode.localTransform.rotation = twgl.v3.add(
                meshNode.localTransform.rotation,
                [1.0, 1.0, 1.0]
            );
        });
    };
    const renderer = new Renderer(gl, scene, camera, preRender);

    // Create the game logic handler
    const game = new Game(map);

    // Create a console log of the FPS
    let frames = 0;
    const fpsConsoleLog = setInterval(() => {
        // eslint-disable-next-line no-console
        console.log(`FPS: ${frames}`);
        frames = 0;
    }, 1000);
    if (!PRINT_FPS) clearInterval(fpsConsoleLog);

    // Begin rendering
    let animationRequestId = requestAnimationFrame(function step(time: number) {
        frames++;

        game.step(time);
        renderer.render(time);

        animationRequestId = requestAnimationFrame(step);
    });

    // During development, stop rendering after the module is refreshed
    // @ts-ignore module.hot is a Parcel construct
    module.hot.dispose(() => {
        cancelAnimationFrame(animationRequestId);
        clearInterval(fpsConsoleLog);
        game.stopGame();
    });
})();
