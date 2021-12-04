#version 300 es

precision mediump float;

in vec2 fragUV;

uniform sampler2D u_depthMap;
uniform float u_nearPlane;
uniform float u_farPlane;

out vec4 fragColor;

float linearizeDepth(float depth) {
    float z = depth * 2.0 - 1.0;
    return (2.0 * u_nearPlane * u_farPlane) / (u_farPlane + u_nearPlane - z * (u_farPlane - u_nearPlane));
}

void main() {
    float depthValue = texture(u_depthMap, fragUV).r;
    // fragColor = vec4(vec3(linearizeDepth(depthValue) / u_farPlane), 1.0); // perspective
    fragColor = vec4(vec3(depthValue), 1.0); // orthographic
}