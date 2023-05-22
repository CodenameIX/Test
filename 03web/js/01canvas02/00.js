window.addEventListener("load", function () {
	const canvas = document.getElementById("c0");
	const ctx = canvas.getContext("2d");
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;

	ctx.lineWidth = 2;
	ctx.strokeStyle = "red";
	ctx.beginPath();
	ctx.moveTo(canvas.width / 2, 0);
	ctx.lineTo(canvas.width / 2, canvas.height);
	ctx.stroke();

	ctx.strokeStyle = "green";
	ctx.beginPath();
	ctx.moveTo(0, canvas.height / 2);
	ctx.lineTo(canvas.width, canvas.height / 2);
	ctx.stroke();

	ctx.fillStyle = "white";
	ctx.strokeStyle = "orangered";
	ctx.font = "80px Helvetica";
	ctx.textAlign = "center"
	ctx.textBaseline = "middle"

	const maxTextWidth = canvas.width * 0.5;
	const lineHeight = 80

	function wrapText(text) {
		let linesArray = [];
		let lineCounter = 0;
		let line = "";
		let words = text.split(" ");
		for (let i = 0; i < words.length; i++) {
			let testLine = line + words[i] + " ";
			if(ctx.measureText(testLine).width > maxTextWidth){
				line = words[i] + " ";
				lineCounter++;
			}
			else{
				line = testLine;
			}
			linesArray[lineCounter] = line;
		}
		let textHeight = lineHeight * lineCounter;
		let textY = canvas.height / 2 - textHeight / 2

		linesArray.forEach((el, index) => {
			ctx.fillText(el, canvas.width / 2, textY + (index * lineHeight));
		})
	}

	wrapText("Welcome aaa bbb ccc")
});

