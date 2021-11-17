#version 300 es

precision highp float;

uniform float u_time;
uniform vec2 u_resolution;
uniform vec3 u_color;

out vec4 outColor;

void main() {
  outColor = vec4(u_color, 1.0);
}
