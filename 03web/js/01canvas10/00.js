window.addEventListener("load", function () {
	const content0 = document.getElementById("content0");
	const canvas = document.getElementById("c0");
	const ctx = canvas.getContext("2d", {
		willReadFrequently: true
	});
	canvas.width = content0.clientWidth;
	canvas.height = content0.clientHeight;
	class Particle {
		constructor(effect, x, y, color) {
			this.effect = effect;
			this.x = Math.random() * canvas.width;
			this.y = Math.random() * canvas.height;
			this.color = color;
			this.originX = x;
			this.originY = y;
			this.size = this.effect.gap;
			this.dx = 0;
			this.dy = 0;
			this.vx = 0;
			this.vy = 0;
			this.px = 0;
			this.py = 0;
			this.force = 0;
			this.angle = 0;
			this.mdistance = 0;
			this.friction = Math.random() * 0.2 - 0.0000001;
			this.ease = Math.atan(Math.random() * 0.8 + 0);
			this.random = Math.random() * 6 + 2
		}
		draw() {
			this.effect.context.fillStyle = this.color;
			this.effect.context.fillRect(this.x, this.y, this.size, this.size);
		}
		update() {
			this.dx = Math.floor(this.effect.mouse.x - this.x);
			this.dy = Math.floor(this.effect.mouse.y - this.y);
			this.mdistance = (this.dx * this.dx + this.dy * this.dy) / 20;
			this.force = (-this.effect.mouse.radius / 2) / (this.mdistance / 4);
			if (this.mdistance < this.effect.mouse.radius) {
				this.angle = Math.atan2(this.dy, this.dx);
				this.vx += this.force * Math.cos(this.angle);
				this.vy += this.force * Math.sin(this.angle);
			}
			this.px = this.originX - this.x;
			this.py = this.originY - this.y;
			this.x += (this.vx *= this.friction) + (this.px) * this.ease;
			this.y += (this.vy *= this.friction) + (this.py) * this.ease;
			if (Math.abs(this.px + this.py) < 0.5) {
				this.vx += Math.floor(this.random * Math.cos(this.random));
				this.vy += Math.floor(this.random * Math.sin(this.random));
			}
			let min = 0;
			let max = 200;
			let clamp = (num, min, max) => Math.min(Math.max(num, min), max);
			let clampRed = clamp(Math.abs((this.px + this.py)), min, max);
			let colorRed = 240 - clampRed;
			let clampGreen = clamp(Math.abs((this.px + this.py) / 1.5), min, max);
			let colorGreen = 240 - clampGreen;
			let clampBlue = clamp((this.px + this.py) / (Math.random() * 3 + 1.6), min, max);
			let colorBlue = 250 - clampBlue;
			let min3 = -0.95;
			let max3 = -0.2;
			let clamp3 = (num, min3, max3) => Math.min(Math.max(num, min3), max3);
			let opacity = clamp3(-Math.abs((this.px + this.py) / 400), min3, max3) + 1;
			this.color = "rgba(" + colorRed + "," + colorGreen + "," + colorBlue + "," + opacity + ")";
			let initsize = 2.5;
			let min2 = 0;
			let max2 = 90;
			let clamp2 = (num2, min2, max2) => Math.min(Math.max(num2, min2), max2);
			this.size = clamp2((Math.abs((this.px + this.py) / 12) + initsize), min2, max2);
		}
	}
	class Effect {
		constructor(context, canvasWidth, canvasHeight) {
			this.context = context;
			this.canvasWidth = canvasWidth;
			this.canvasHeight = canvasHeight;
			this.textX = this.canvasWidth / 2;
			this.textY = this.canvasHeight / 2;
			this.text = "Willkommen"
			this.fontSize = Math.floor(canvas.width / 50) + 94;
			this.text2 = "Auf meinem Testbereich"
			this.fontSize2 = Math.floor(canvas.width / 50) + 54;
			this.size = 3;
			this.mouse = {
				radius: 20000,
				x: 0,
				y: 0
			}
			window.addEventListener("mousemove", (e) => {
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
			for (let y = 0; y < this.canvasHeight; y += this.size) {
				for (let x = 0; x < this.canvasWidth; x += this.size) {
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

