#version 300 es

in vec4 position;
in vec3 normal;
in vec2 uv;
in mat4 a_matrix;

uniform mat4 u_cameraMatrix;

out vec2 fragUV;
out vec3 fragPosition;
out vec3 fragNormal;

void main() {

  fragUV = uv;

	vec4 newPosition = a_matrix * position;
	fragPosition = newPosition.xyz;

  gl_Position = u_cameraMatrix * newPosition;

	mat4 normalMatrix = transpose(inverse(a_matrix));
	fragNormal = normalize((normalMatrix * vec4(normal, 0)).xyz);
}
