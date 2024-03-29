window.addEventListener("load", function(){
	const canvas = document.getElementById("c0");
	const ctx = canvas.getContext("2d");
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
	console.log(ctx);

	class Particle {
		constructor() {

		}
		draw() {

		}
		update() {

		}
	}

	class Effect {
		constructor(context, canvasWidth, canvasHeight) {
			this.context = context;
			this.canvasWidth = canvasWidth;
			this.canvasHeight = canvasHeight;
			this.textX = this.canvasWidth / 2;
			this.textY = this.canvasHeight / 2;
			this.fontSize = 100;
			this.lineHeight = this.fontSize * 0.8;
			this.maxTextWidth = this.canvasWidth * 0.8;
			this.textInput = document.getElementById("textInput");
			this.textInput.addEventListener("keyup", (e) => {
				if (e.key !== " ") {
					this.context.clearRect(0, 0, this.canvasWidth, this.canvasHeight);
					this.wrapText(e.target.value);
				}
			});
		}
		wrapText(text) {
			//
			const gradient = this.context.createLinearGradient(0, 0, this.canvasWidth, this.canvasHeight);
			gradient.addColorStop(0.3, "red");
			gradient.addColorStop(0.5, "blue");
			gradient.addColorStop(0.7, "green");
			this.context.fillStyle = gradient;
			this.context.textAlign = "center"
			this.context.textBaseline = "middle"
			this.context.lineWidth = 2;
			this.context.strokeStyle = "white";
			this.context.font = this.fontSize + "px Helvetica";
			//
			let linesArray = [];
			let words = text.split(" ");
			let lineCounter = 0;
			let line = "";
			for (let i = 0; i < words.length; i++) {
				let testLine = line + words[i] + " ";
				console.log(this.context.measureText(testLine).width);
				if (this.context.measureText(testLine).width > this.maxTextWidth) {
					line = words[i] + " ";
					lineCounter++;
				} else {
					line = testLine;
				}
				linesArray[lineCounter] = line;
			}
			let textHeight = this.lineHeight * lineCounter;
			this.textY = this.canvasHeight / 2 - textHeight / 2;
			linesArray.forEach((el, index) => {
				this.context.fillText(el, this.textX, this.textY + (index * this.lineHeight));
				this.context.strokeText(el, this.textX, this.textY + (index * this.lineHeight));
			});
		}
		convertToParticles() {

		}
		render() {

		}
	}

	const effect = new Effect(ctx, canvas.width, canvas.height);
	effect.wrapText("Hello");
	console.log(effect);

	function animate() {

	}
});

