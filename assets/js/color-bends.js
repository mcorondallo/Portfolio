/**
 * ColorBends - Animated gradient background using WebGL
 * Vanilla JavaScript implementation
 */
class ColorBends {
	constructor(container, options = {}) {
		this.container = container;
		this.options = {
			colors: options.colors || ['#FF0800', '#0019FF', '#00FF04'],
			rotation: options.rotation || 0,
			autoRotate: options.autoRotate || 0,
			speed: options.speed || 0.2,
			scale: options.scale || 1,
			frequency: options.frequency || 1,
			warpStrength: options.warpStrength || 1,
			mouseInfluence: options.mouseInfluence || 1,
			parallax: options.parallax || 0.5,
			noise: options.noise || 0.1,
			transparent: options.transparent || false
		};

		this.canvas = null;
		this.gl = null;
		this.program = null;
		this.time = 0;
		this.mouseX = 0.5;
		this.mouseY = 0.5;
		this.animationFrame = null;

		this.init();
	}

	init() {
		// Create canvas
		this.canvas = document.createElement('canvas');
		this.canvas.style.position = 'absolute';
		this.canvas.style.top = '0';
		this.canvas.style.left = '0';
		this.canvas.style.width = '100%';
		this.canvas.style.height = '100%';
		this.canvas.style.pointerEvents = 'none';
		this.container.appendChild(this.canvas);

		// Get WebGL context
		this.gl = this.canvas.getContext('webgl') || this.canvas.getContext('experimental-webgl');

		if (!this.gl) {
			console.warn('WebGL not supported, falling back to CSS gradient');
			this.fallbackToCSSGradient();
			return;
		}

		// Set up WebGL
		this.setupWebGL();
		this.resize();

		// Event listeners
		window.addEventListener('resize', () => this.resize());
		this.container.addEventListener('mousemove', (e) => this.onMouseMove(e));

		// Start animation
		this.animate();
	}

	setupWebGL() {
		const gl = this.gl;

		// Vertex shader
		const vertexShaderSource = `
			attribute vec2 position;
			void main() {
				gl_Position = vec4(position, 0.0, 1.0);
			}
		`;

		// Fragment shader with color bends effect
		const fragmentShaderSource = `
			precision mediump float;
			uniform vec2 resolution;
			uniform float time;
			uniform vec2 mouse;
			uniform vec3 color1;
			uniform vec3 color2;
			uniform vec3 color3;
			uniform float rotation;
			uniform float speed;
			uniform float scale;
			uniform float frequency;
			uniform float warpStrength;
			uniform float mouseInfluence;
			uniform float parallax;
			uniform float noiseAmount;

			// Simplex noise function
			vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
			vec2 mod289(vec2 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
			vec3 permute(vec3 x) { return mod289(((x*34.0)+1.0)*x); }

			float snoise(vec2 v) {
				const vec4 C = vec4(0.211324865405187, 0.366025403784439, -0.577350269189626, 0.024390243902439);
				vec2 i  = floor(v + dot(v, C.yy));
				vec2 x0 = v -   i + dot(i, C.xx);
				vec2 i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
				vec4 x12 = x0.xyxy + C.xxzz;
				x12.xy -= i1;
				i = mod289(i);
				vec3 p = permute(permute(i.y + vec3(0.0, i1.y, 1.0)) + i.x + vec3(0.0, i1.x, 1.0));
				vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);
				m = m*m;
				m = m*m;
				vec3 x = 2.0 * fract(p * C.www) - 1.0;
				vec3 h = abs(x) - 0.5;
				vec3 ox = floor(x + 0.5);
				vec3 a0 = x - ox;
				m *= 1.79284291400159 - 0.85373472095314 * (a0*a0 + h*h);
				vec3 g;
				g.x  = a0.x  * x0.x  + h.x  * x0.y;
				g.yz = a0.yz * x12.xz + h.yz * x12.yw;
				return 130.0 * dot(m, g);
			}

			void main() {
				vec2 uv = gl_FragCoord.xy / resolution.xy;

				// Apply rotation
				float angle = rotation * 0.0174533; // Convert to radians
				vec2 center = vec2(0.5, 0.5);
				vec2 rotated = uv - center;
				float cosA = cos(angle);
				float sinA = sin(angle);
				rotated = vec2(
					rotated.x * cosA - rotated.y * sinA,
					rotated.x * sinA + rotated.y * cosA
				);
				uv = rotated + center;

				// Apply scale
				uv = (uv - 0.5) / scale + 0.5;

				// Add mouse influence
				vec2 mouseOffset = (mouse - 0.5) * mouseInfluence * 0.2;
				uv += mouseOffset;

				// Create animated warped coordinates
				float t = time * speed;
				vec2 warp = vec2(
					snoise(uv * frequency + t * 0.5) * warpStrength,
					snoise(uv * frequency + t * 0.5 + 100.0) * warpStrength
				);

				vec2 warpedUV = uv + warp * 0.2;

				// Add parallax effect
				warpedUV += vec2(sin(t * 0.3) * parallax * 0.05, cos(t * 0.2) * parallax * 0.05);

				// Create gradient blend using warped coordinates
				float gradient1 = length(warpedUV - vec2(0.3 + sin(t * 0.4) * 0.25, 0.5 + cos(t * 0.3) * 0.25));
				float gradient2 = length(warpedUV - vec2(0.7 + cos(t * 0.5) * 0.25, 0.5 + sin(t * 0.4) * 0.25));
				float gradient3 = length(warpedUV - vec2(0.5 + sin(t * 0.3) * 0.3, 0.3 + cos(t * 0.5) * 0.3));

				// Add noise
				float noiseValue = snoise(warpedUV * 10.0 + t) * noiseAmount;

				// Blend colors with smoother transitions
				vec3 color = mix(color1, color2, smoothstep(0.0, 0.8, gradient1 + noiseValue));
				color = mix(color, color3, smoothstep(0.2, 1.0, gradient2 + noiseValue));
				color = mix(color, color2, smoothstep(0.1, 0.9, gradient3 + noiseValue));

				gl_FragColor = vec4(color, 1.0);
			}
		`;

		// Compile shaders
		const vertexShader = this.compileShader(gl, vertexShaderSource, gl.VERTEX_SHADER);
		const fragmentShader = this.compileShader(gl, fragmentShaderSource, gl.FRAGMENT_SHADER);

		// Create program
		this.program = gl.createProgram();
		gl.attachShader(this.program, vertexShader);
		gl.attachShader(this.program, fragmentShader);
		gl.linkProgram(this.program);

		if (!gl.getProgramParameter(this.program, gl.LINK_STATUS)) {
			console.error('Program link error:', gl.getProgramInfoLog(this.program));
			return;
		}

		gl.useProgram(this.program);

		// Set up geometry (full-screen quad)
		const positions = new Float32Array([
			-1, -1,
			 1, -1,
			-1,  1,
			 1,  1
		]);

		const buffer = gl.createBuffer();
		gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
		gl.bufferData(gl.ARRAY_BUFFER, positions, gl.STATIC_DRAW);

		const positionLocation = gl.getAttribLocation(this.program, 'position');
		gl.enableVertexAttribArray(positionLocation);
		gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0);
	}

	compileShader(gl, source, type) {
		const shader = gl.createShader(type);
		gl.shaderSource(shader, source);
		gl.compileShader(shader);

		if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
			console.error('Shader compile error:', gl.getShaderInfoLog(shader));
			gl.deleteShader(shader);
			return null;
		}

		return shader;
	}

	hexToRgb(hex) {
		const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
		return result ? {
			r: parseInt(result[1], 16) / 255,
			g: parseInt(result[2], 16) / 255,
			b: parseInt(result[3], 16) / 255
		} : { r: 0, g: 0, b: 0 };
	}

	resize() {
		const rect = this.container.getBoundingClientRect();
		this.canvas.width = rect.width;
		this.canvas.height = rect.height;

		if (this.gl) {
			this.gl.viewport(0, 0, this.canvas.width, this.canvas.height);
		}
	}

	onMouseMove(e) {
		const rect = this.container.getBoundingClientRect();
		this.mouseX = (e.clientX - rect.left) / rect.width;
		this.mouseY = 1.0 - (e.clientY - rect.top) / rect.height;
	}

	animate() {
		if (!this.gl || !this.program) return;

		this.time += 0.016; // ~60fps

		const gl = this.gl;
		gl.useProgram(this.program);

		// Set uniforms
		const resolutionLocation = gl.getUniformLocation(this.program, 'resolution');
		gl.uniform2f(resolutionLocation, this.canvas.width, this.canvas.height);

		const timeLocation = gl.getUniformLocation(this.program, 'time');
		gl.uniform1f(timeLocation, this.time);

		const mouseLocation = gl.getUniformLocation(this.program, 'mouse');
		gl.uniform2f(mouseLocation, this.mouseX, this.mouseY);

		// Set color uniforms
		const colors = this.options.colors.map(c => this.hexToRgb(c));
		gl.uniform3f(gl.getUniformLocation(this.program, 'color1'), colors[0].r, colors[0].g, colors[0].b);
		gl.uniform3f(gl.getUniformLocation(this.program, 'color2'), colors[1].r, colors[1].g, colors[1].b);
		gl.uniform3f(gl.getUniformLocation(this.program, 'color3'), colors[2].r, colors[2].g, colors[2].b);

		// Set parameter uniforms
		gl.uniform1f(gl.getUniformLocation(this.program, 'rotation'), this.options.rotation);
		gl.uniform1f(gl.getUniformLocation(this.program, 'speed'), this.options.speed);
		gl.uniform1f(gl.getUniformLocation(this.program, 'scale'), this.options.scale);
		gl.uniform1f(gl.getUniformLocation(this.program, 'frequency'), this.options.frequency);
		gl.uniform1f(gl.getUniformLocation(this.program, 'warpStrength'), this.options.warpStrength);
		gl.uniform1f(gl.getUniformLocation(this.program, 'mouseInfluence'), this.options.mouseInfluence);
		gl.uniform1f(gl.getUniformLocation(this.program, 'parallax'), this.options.parallax);
		gl.uniform1f(gl.getUniformLocation(this.program, 'noiseAmount'), this.options.noise);

		// Draw
		gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);

		this.animationFrame = requestAnimationFrame(() => this.animate());
	}

	fallbackToCSSGradient() {
		// Fallback to CSS if WebGL is not supported
		this.container.style.background = `
			radial-gradient(circle at 20% 50%, ${this.options.colors[0]}33 0%, transparent 50%),
			radial-gradient(circle at 80% 50%, ${this.options.colors[1]}33 0%, transparent 50%),
			radial-gradient(circle at 50% 80%, ${this.options.colors[2]}33 0%, transparent 50%),
			#000000
		`;
	}

	destroy() {
		if (this.animationFrame) {
			cancelAnimationFrame(this.animationFrame);
		}
		if (this.canvas && this.canvas.parentNode) {
			this.canvas.parentNode.removeChild(this.canvas);
		}
	}
}

// Initialize ColorBends on entire page background
document.addEventListener('DOMContentLoaded', function() {
	// Create a fixed background container for ColorBends
	const bgContainer = document.createElement('div');
	bgContainer.id = 'color-bends-background';
	bgContainer.style.position = 'fixed';
	bgContainer.style.top = '0';
	bgContainer.style.left = '0';
	bgContainer.style.width = '100%';
	bgContainer.style.height = '100%';
	bgContainer.style.zIndex = '-1';
	bgContainer.style.pointerEvents = 'none';
	bgContainer.style.backgroundColor = '#000000';

	document.body.insertBefore(bgContainer, document.body.firstChild);

	// Initialize ColorBends effect on the background
	new ColorBends(bgContainer, {
		colors: ['#FF0800', '#0019FF', '#00FF04'],
		rotation: 0,
		autoRotate: 0,
		speed: 0.2,
		scale: 1,
		frequency: 1,
		warpStrength: 1,
		mouseInfluence: 1,
		parallax: 0.5,
		noise: 0.1,
		transparent: false
	});
});
