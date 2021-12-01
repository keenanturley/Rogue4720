#version 300 es

precision highp float;

in vec2 fragUV;

uniform sampler2D u_texture;

out vec4 outColor;

void main() {
    vec3 materialColor = texture(u_texture, fragUV).rgb;

    outColor = vec4(materialColor, 1);
}
