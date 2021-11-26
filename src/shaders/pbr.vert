#version 300 es

in vec4 position;
in vec3 normal;
in vec2 uv;

uniform mat4 u_modelMatrix;
uniform mat4 u_cameraMatrix;

out vec2 fragUV;
out vec3 fragPosition;
out vec3 fragNormal;

void main() {

    fragUV = uv;

	vec4 newPosition = u_modelMatrix * position;
	fragPosition = newPosition.xyz;

    gl_Position = u_cameraMatrix * newPosition;
	mat4 normalMatrix = transpose(inverse(u_modelMatrix));
	fragNormal = normalize((normalMatrix * vec4(normal, 0)).xyz);
}
