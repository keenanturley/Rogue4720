#version 300 es

in vec3 position;
in vec2 uv;

out vec2 fragUV;

void main() {
    fragUV = uv;
    gl_Position = vec4(position, 1.0);
}