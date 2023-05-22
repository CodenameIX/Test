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
			this.x = Math.random() * this.effect.canvasWidth;
			this.y = canvas.height / 5;
			this.color = color;
			this.originX = x;
			this.originY = y;
			this.size = this.effect.gap;
			this.dx = 0;
			this.dy = 0;
			this.vx = 0;
			this.vy = 0;
			this.force = 0;
			this.angle = 0;
			this.distance = 0;
			this.friction = Math.random() * 0.5 - 0.001;
			this.ease = Math.random() * 0.3 + 0.1;
		}
		draw() {
			this.effect.context.fillStyle = this.color;
			this.effect.context.fillRect(this.x, this.y, this.size, this.size);
		}
		update() {
			this.dx = this.effect.mouse.x - this.x;
			this.dy = this.effect.mouse.y - this.y;
			this.distance = (((this.dx * this.dx) / 2) + this.dy * this.dy) / 10;
			this.force = (-this.effect.mouse.radius / 8) / (this.distance / 2);
			if (this.distance < this.effect.mouse.radius) {
				this.angle = Math.atan2(this.dy, this.dx);
				this.vx += this.force * Math.cos(this.angle);
				this.vy += this.force * Math.sin(this.angle);
			}
			this.x += (this.vx *= this.friction) + (this.originX - this.x) * this.ease;
			this.y += (this.vy *= this.friction) + (this.originY - this.y) * this.ease;
		}
	}
	class Effect {
		constructor(context, canvasWidth, canvasHeight) {
			this.context = context;
			this.canvasWidth = canvasWidth;
			this.canvasHeight = canvasHeight;
			this.textX = this.canvasWidth / 2;
			this.textY = this.canvasHeight / 2;
			this.fontSize = 120;
			this.lineHeight = this.fontSize * 0.9;
			this.maxTextWidth = this.canvasWidth * 0.7;
			this.particles = [];
			this.gap = 2;
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
		wrapText(text) {
			const gradient = this.context.createLinearGradient(0, 0, this.canvasWidth, this.canvasHeight);
			gradient.addColorStop(0.4, "rgb(220,220,225)");
			gradient.addColorStop(0.5, "rgb(180,180,185)");
			gradient.addColorStop(0.6, "rgb(140,140,145)");
			this.context.fillStyle = "rgb(180,180,185)";
			this.context.textAlign = "center"
			this.context.textBaseline = "middle"
			this.context.lineWidth = 2;
			this.context.strokeStyle = gradient;
			this.context.font = this.fontSize + "px menu";
			let linesArray = [];
			let words = text.split(" ");
			let lineCounter = 0;
			let line = "";
			for (let i = 0; i < words.length; i++) {
				let testLine = line + words[i] + " ";
				if (this.context.measureText(testLine).width > this.maxTextWidth) {
					line = words[i] + " ";
					lineCounter++;
				} else {
					line = testLine;
				}
				linesArray[lineCounter] = line;
			}
			let textHeight = this.lineHeight * lineCounter;
			this.textY = this.canvasHeight / 5 - textHeight / 2;
			linesArray.forEach((el, index) => {
				this.context.fillText(el, this.textX, this.textY + (index * this.lineHeight));
				this.context.strokeText(el, this.textX, this.textY + (index * this.lineHeight));
			});
			this.convertToParticles();
		}
		convertToParticles() {
			this.particles = [];
			const pixels = this.context.getImageData(0, 0, this.canvasWidth, this.canvasHeight).data;
			this.context.clearRect(0, 0, this.canvasWidth, this.canvasHeight);
			for (let y = 0; y < this.canvasHeight; y += this.gap) {
				for (let x = 0; x < this.canvasWidth; x += this.gap) {
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
			this.maxTextWidth = this.canvasWidth * 0.8;
		}
	}
	const Text = " Willkommen";
	const effect = new Effect(ctx, canvas.width, canvas.height);
	effect.wrapText(Text);
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
		effect.wrapText(Text);
	});
});