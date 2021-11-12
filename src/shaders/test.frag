#version 300 es

precision highp float;

in vec4 v_color;

uniform float u_time;
uniform vec2 u_resolution;

out vec4 outColor;

void main() {
  outColor = vec4(v_color.xyz, 1.0);
}
