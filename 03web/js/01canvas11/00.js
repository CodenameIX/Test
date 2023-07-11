window.addEventListener("load", function () {
	const content0 = document.getElementById("content0");
	const canvas = document.getElementById("c0");
	const ctx = canvas.getContext("2d", {
		willReadFrequently: true
	});
	canvas.width = content0.clientWidth;
	canvas.height = content0.clientHeight;

	ParticleSize = 3;
	zoom = -0.5;
	pov = 100;
	class Particle {
		constructor(effect, x, y, z, color) {
			
			this.random0 = Math.random() * 0.08 + 0.04;
			this.random1 = Math.random() * 6 + 2;
			this.random2 = Math.random() * 60 + 20;
			this.random3 = Math.random() * 600 + 200;

			let radius = 500;
			let angle = Math.random() * 600 + 200;

			this.startTime = new Date();
			this.effect = effect;
			this.color = "rgba(255,255,255,1)";
			this.zoom = zoom;
			this.pov = pov;
			this.ParticleSize = ParticleSize;
			
			let ZX = (canvas.width / 2);
			let ZY = (canvas.height / 2);
			let Z0 = 


			z = (ParticleSize + zoom);

			this.x = radius * Math.sin(Math.PI * 2 * angle / 360) + (canvas.width / 2);
			this.y = radius * Math.cos(Math.PI * 2 * angle / 360) + (canvas.height / 2);
			this.z = 0;      

			this.originX = x;
			this.originY = y;
			this.originZ = z;
			this.destinationX = 0;
			this.destinationY = 0;
			this.destinationZ = 0;


			this.distortion = (Math.sin(Math.PI) / 1e-14);

		}
		draw() {
			this.effect.context.fillStyle = this.color;
			this.effect.context.fillRect(this.x, this.y, this.z, this.z);
		}
		update() {
			this.endTime = new Date();
			this.timeDiff = (this.endTime - this.startTime) / 100;

			this.destinationX = this.originX - this.x;
			this.destinationY = this.originY - this.y;
			this.destinationZ = this.originZ - this.z;


			this.x += (this.destinationX * this.random0);
			this.y += (this.destinationY * this.random0);
			this.z += (this.destinationZ);
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
			this.ParticleSize = ParticleSize;
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

