import * as twgl from 'twgl.js';

const main = async() => {
    const canvas = document.getElementById('canvas');
    const gl = canvas.getContext('webgl2');
    
    const vs = require('./shaders/basic.vert');
    const fs = require('./shaders/basic.frag');
    
    const programInfo = twgl.createProgramInfo(gl, [vs, fs]);
    const arrays = {
        position: [-1, -1, 0, 1, -1, 0, -1, 1, 0, -1, 1, 0, 1, -1, 0, 1, 1, 0],
    };
    const bufferInfo = twgl.createBufferInfoFromArrays(gl, arrays);
    
    function render(time) {
        twgl.resizeCanvasToDisplaySize(gl.canvas);
        gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);
    
        const uniforms = {
            time: time * 0.001,
            resolution: [gl.canvas.width, gl.canvas.height],
        };
    
        gl.useProgram(programInfo.program);
        twgl.setBuffersAndAttributes(gl, programInfo, bufferInfo);
        twgl.setUniforms(programInfo, uniforms);
        twgl.drawBufferInfo(gl, bufferInfo);
    
        requestAnimationFrame(render);
    }
    requestAnimationFrame(render);
};

main();