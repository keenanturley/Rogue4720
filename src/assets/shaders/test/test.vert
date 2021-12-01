#version 300 es

in vec4 position;
in vec4 normal;

uniform mat4 u_matrix;
uniform float u_time;
uniform vec2 u_resolution;

out vec4 v_color;

void main() {
  gl_Position = u_matrix * position;

  v_color = vec4(abs(normal.xyz), 1.0);
}
