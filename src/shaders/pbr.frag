#version 300 es

precision mediump float;

in vec2 fragUV;
in vec3 fragPosition;
in vec3 fragNormal;

uniform sampler2D u_albedo;
uniform sampler2D u_normal;
uniform sampler2D u_mrao;
uniform vec3 u_dLightDirection;
uniform vec3 u_dLightColor;
uniform vec3 u_pLightPostions[4];
uniform vec3 u_pLightColors[4];
uniform vec3 u_eyePosition;

out vec4 outColor;

const float PI = 3.14159265359;

vec3 fresnel(float cosTheta, vec3 R0)
{
	return R0 + (1.0 - R0) * pow( clamp(1.0 - cosTheta, 0.0, 1.0), 5.0);
}

float distributionGGX(vec3 N, vec3 H, float roughness)
{
	float a = roughness * roughness;
	float a2 = a * a;
	float NdotH = max(dot(N, H), 0.0);
	float NdotH2 = NdotH * NdotH;

	float denominator = NdotH2 * (a2 - 1.0) + 1.0;
	denominator = PI * denominator * denominator;

	return a2 / denominator;
}

float geometrySchlickGGX(float NdotV, float roughness)
{
	float r = roughness + 1.0;
	float k = (r * r) / 8.0;

	float denominator = NdotV * (1.0 - k) + k;
	return NdotV / denominator;
}

float geometrySmith(vec3 N, vec3 V, vec3 L, float roughness)
{
	float ggx1 = geometrySchlickGGX(max(dot(N, V), 0.0), roughness);
	float ggx2 = geometrySchlickGGX(max(dot(N, L), 0.0), roughness);

	return ggx1 * ggx2;
}

// normal mapping function borrowed from Professor Pattanaik
vec3 perturbNormalNM(vec3 pos)
{
	vec3 Q0 = dFdx(pos);
	vec3 Q1 = dFdy(pos);
	vec2 st0 = dFdx(fragUV);
	vec2 st1 = dFdy(fragUV);

	float denom = st1.t * st0.s - st0.t * st1.s;
	float denomSign = sign(denom);

	vec3 T = normalize((Q0 * st1.t - Q1 * st0.t) * denomSign);
	vec3 B = normalize((-Q0 * st1.s + Q1 * st0.s) * denomSign);
	vec3 N = normalize(fragNormal);
	vec3 mapN = texture(u_normal, fragUV).xyz * 2.0 - 1.0;
	mapN.xyz *= (gl_FrontFacing ? 1.0 : -1.0);
	return normalize(mat3(T, B, N) * mapN);
}

vec3 calcDirLight(vec3 lightPos, vec3 lightCol, vec3 normal, vec3 viewDir)
{
	// Textures
	vec3 albedo = texture(u_albedo, fragUV).rgb;
	float metal = texture(u_mrao, fragUV).r;
	float rough = texture(u_mrao, fragUV).g;

	// R is the reflectance coefficient
	vec3 R0 = vec3(0.04);
	R0 = mix(R0, albedo, metal);

	// calculate each point light
	vec3 Lo = vec3(0.0);
	vec3 L = normalize(-lightPos);
	vec3 H = normalize(viewDir + L);

	float distance = length(lightPos - fragPosition);
	vec3 radiance = lightCol;

	// calculate how much the normal vectors are aligned to the half vector
	float NDF = distributionGGX(normal, H, rough);
	
	// calculate ratio of self-shading of microfacets
	float G = geometrySmith(normal, viewDir, L, rough);
	
	// calculate reflecance according to fresnel's equation
	vec3 R = fresnel(max(dot(H, viewDir), 0.0), R0);

	// calculate out output light
	vec3 kD = (vec3(1.0) - R) * (1.0 - metal);
	
	// now calculate the actual reflectance with Cook-Torrance BRDF
	vec3 numerator = NDF * G * R;
	float denominator = 4.0 * max(dot(normal, viewDir), 0.0) * max(dot(normal, L), 0.0) + 0.0001;
	vec3 specular = numerator / denominator;
	
	float NdotL = max(dot(normal, L), 0.0);
	Lo += (kD * albedo / PI + specular) * radiance * NdotL;

	return Lo;
}

vec3 calcPointLight(vec3 lightPos, vec3 lightCol, vec3 normal, vec3 fragPosition, vec3 viewDir)
{
	// Textures
	vec3 albedo = texture(u_albedo, fragUV).rgb;
	float metal = texture(u_mrao, fragUV).r;
	float rough = texture(u_mrao, fragUV).g;

	// R is the reflectance coefficient
	vec3 R0 = vec3(0.04);
	R0 = mix(R0, albedo, metal);

	// calculate each point light
	vec3 Lo = vec3(0.0);
	vec3 L = normalize(lightPos - fragPosition);
	vec3 H = normalize(viewDir + L);

	float distance = length(lightPos - fragPosition);
	float attenuation = 1.0 / (distance * distance);
	vec3 radiance = lightCol * attenuation;

	// calculate how much the normal vectors are aligned to the half vector
	float NDF = distributionGGX(normal, H, rough);
	
	// calculate ratio of self-shading of microfacets
	float G = geometrySmith(normal, viewDir, L, rough);
	
	// calculate reflecance according to fresnel's equation
	vec3 R = fresnel(max(dot(H, viewDir), 0.0), R0);

	// calculate out output light
	vec3 kD = (vec3(1.0) - R) * (1.0 - metal);
	
	// now calculate the actual reflectance with Cook-Torrance BRDF
	vec3 numerator = NDF * G * R;
	float denominator = 4.0 * max(dot(normal, viewDir), 0.0) * max(dot(normal, L), 0.0) + 0.0001;
	vec3 specular = numerator / denominator;
	
	float NdotL = max(dot(normal, L), 0.0);
	Lo += (kD * albedo / PI + specular) * radiance * NdotL;

	return Lo;
}

void main() {
	vec3 albedo = texture(u_albedo, fragUV).rgb;
	float metal = texture(u_mrao, fragUV).r;
	float ao = texture(u_mrao, fragUV).b;

	// normal vector, view vector, light vector, half vector
	vec3 N = perturbNormalNM(fragPosition);
	vec3 V = normalize(u_eyePosition - fragPosition);

	// R is the reflectance coefficient
	vec3 R0 = vec3(0.04);
	R0 = mix(R0, albedo, metal);

	vec3 Lo = vec3(0.0);

	// calculate the directional light
	Lo += calcDirLight(u_dLightDirection, u_dLightColor, N, V);

	// calculate each point light
	for(int i = 0; i < 4; i++)
		Lo += calcPointLight(u_pLightPostions[i], u_pLightColors[i], N, fragPosition, V);
	

	// now calculate final color;
	vec3 ambient = vec3(0.03) * albedo * ao;
	vec3 color = ambient + Lo;

	color = color / (color + vec3(1.0));
	color = pow(color, vec3(1.0 / 2.2));

    outColor = vec4(color, 1);
}
