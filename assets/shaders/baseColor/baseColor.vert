#version 300 es

in vec4 position;

uniform mat4 u_matrix;
uniform vec3 u_color;
uniform float u_time;
uniform vec2 u_resolution;

void main() {
  gl_Position = u_matrix * position;
}
