#version 300 es

precision highp float;

in vec4 position;
in vec3 normal;
in vec2 uv;

uniform mat4 u_matrix;

out vec2 fragUV;

void main() {

    fragUV = uv;

    gl_Position = u_matrix * position;
}
