window.addEventListener("load", function () {
	const content0 = document.getElementById("content0");
	const canvas = document.getElementById("c0");
	const ctx = canvas.getContext("2d", {
		willReadFrequently: true
	});
	canvas.width = content0.clientWidth;
	canvas.height = content0.clientHeight;
	let width = content0.clientWidth;
	let height = content0.clientHeight;

	let rotationSpeed = 4;
	let sizeZ = 4
	let GLOBE_RADIUS = width * 0.4;
	let GLOBE_CENTER_Z = -GLOBE_RADIUS;
	let PROJECTION_CENTER_X = width / 2;
	let PROJECTION_CENTER_Y = height / 2;
	let FIELD_OF_VIEW = width * 0.6;

	class Particle {
		constructor(effect, x, y, z) {
			this.effect = effect;
			this.color = "rgba(255,255,255,1)";
			this.x = 0;
			this.y = 0;
			this.z = 0;

			this.random = Math.random() * 1 + 0;
			this.theta = Math.random() * 2 * Math.PI;
			this.phi = Math.acos((Math.random() * 2) - 1);

			this.rotX = 0;
			this.rotY = 0;
			this.rotZ = 0;
			this.xProject = 0;
			this.yProject = 0;
			this.zProject = 0;
			this.rotation = 0;
			this.counter = 0;

			this.originX = x;
			this.originY = y;
			this.destinationX = 0;
			this.destinationY = 0;
		}
		draw() {
			this.effect.context.fillStyle = this.color;
			this.effect.context.fillRect(this.xProject, this.yProject, sizeZ * this.zProject, sizeZ * this.zProject);
		}
		update() {
			this.rotation += rotationSpeed / 1000;
			this.counter += 0.1;

			this.x = GLOBE_RADIUS * Math.sin(this.phi) * Math.cos(this.theta);
			this.y = GLOBE_RADIUS * Math.sin(this.phi) * Math.sin(this.theta);
			this.z = GLOBE_RADIUS * Math.cos(this.phi) + GLOBE_CENTER_Z;

			this.rotX = Math.cos(this.rotation) * this.x + Math.sin(this.rotation) * (this.z - GLOBE_CENTER_Z);
			this.rotY = 0;
			this.rotZ = -Math.sin(this.rotation) * this.x + Math.cos(this.rotation) * (this.z - GLOBE_CENTER_Z) + GLOBE_CENTER_Z;

			this.xProject = (this.rotX * this.zProject) + PROJECTION_CENTER_X;
			this.yProject = (this.y * this.zProject) + PROJECTION_CENTER_Y;
			this.zProject = FIELD_OF_VIEW / (FIELD_OF_VIEW - this.rotZ);

			this.destinationX = this.originX - this.xProject;
			this.destinationY = this.originY - this.yProject;
			//this.originZ = this.z / GLOBE_CENTER_Z;
			//this.destinationZ = this.originZ - this.zProject;

			if (this.destinationX < (this.xProject - 500) && -this.destinationX < (this.zProject + 400)) {
				this.xProject += this.destinationX;
				this.yProject += this.destinationY;
				//this.zProject += (this.destinationZ * this.random);
			}

		}
	}

	class Effect {
		constructor(context, canvasWidth, canvasHeight) {
			this.context = context;
			this.canvasWidth = canvasWidth;
			this.canvasHeight = canvasHeight;
			this.textX = this.canvasWidth / 2;
			this.textY = this.canvasHeight / 2;
			this.text = "Willkommen";
			this.fontSize = Math.floor(canvas.width / 50) + 94;
			this.text2 = "Auf meinem Testbereich";
			this.fontSize2 = Math.floor(canvas.width / 50) + 54;
			this.ParticleSize = 3;
			this.mouse = {
				radius: 20000,
				x: 0,
				y: 0
			}
			window.addEventListener("pointermove", (e) => {
				this.mouse.x = e.clientX - content0.offsetLeft;
				this.mouse.y = e.clientY - content0.offsetTop;
			});
		}
		wrap() {
			this.context.fillStyle = "rgb(230,230,240)";
			this.context.textAlign = "center"
			this.context.textBaseline = "middle"
			this.context.font = this.fontSize + "px Times New Roman";
			this.context.fillText(this.text, this.textX, this.textY / 2.2);
			this.context.font = this.fontSize2 + "px Times New Roman";
			this.context.fillText(this.text2, this.textX, this.textY / 1.1);
			this.convertToParticles();
		}
		convertToParticles() {
			this.particles = [];
			const pixels = this.context.getImageData(0, 0, this.canvasWidth, this.canvasHeight).data;
			this.context.clearRect(0, 0, this.canvasWidth, this.canvasHeight);
			for (let y = 0; y < this.canvasHeight; y += this.ParticleSize) {
				for (let x = 0; x < this.canvasWidth; x += this.ParticleSize) {
					const index = (y * this.canvasWidth + x) * 4;
					const alpha = pixels[index + 3];
					if (alpha > 0) {
						const red = pixels[index];
						const green = pixels[index + 1];
						const blue = pixels[index + 2];
						const color = "rgb(" + red + "," + green + "," + blue + ")";
						this.particles.push(new Particle(this, x, y, color));
					}
				}
			}
			window.addEventListener("click", (e) => { console.log(this.particles) });
		}
		render() {
			this.particles.forEach(particle => {
				particle.update();
				particle.draw();
			});
		}
		resize(width, height) {
			this.canvasWidth = width;
			this.canvasHeight = height;
			this.textX = this.canvasWidth / 2;
			this.textY = this.canvasHeight / 2;
			this.fontSize = Math.floor(canvas.width / 50) + 94;
			this.fontSize2 = Math.floor(canvas.width / 50) + 54;
		}
	}
	const effect = new Effect(ctx, canvas.width, canvas.height);
	effect.wrap();
	effect.render();
	function animate() {
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		effect.render();
		const fps = 30;
		setTimeout(() => {
			requestAnimationFrame(animate);
		}, 1000 / fps);
	}
	animate();
	window.addEventListener("resize", function () {
		canvas.width = content0.clientWidth;
		canvas.height = content0.clientHeight;
		effect.resize(canvas.width, canvas.height);
		effect.wrap();
	});
});

