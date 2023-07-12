localload();
let cdiv = document.getElementById("cdiv");
let inputside = document.getElementById("inputside");
let canvasc0 = document.getElementById("c0");
let canvasc1 = document.getElementById("c1");
let canvasc2 = document.getElementById("c2");
let canvasc3 = document.getElementById("c3");
let ctxc0 = canvasc0.getContext("2d", {willReadFrequently: false, desynchronized: true});
let ctxc1 = canvasc1.getContext("2d", {willReadFrequently: false, desynchronized: true});
let ctxc2 = canvasc2.getContext("2d", {willReadFrequently: true, desynchronized: true});
let ctxc3 = canvasc3.getContext("2d", {willReadFrequently: false, desynchronized: true});
let Xmid = 0;
let Ymid = 0;
let RXin = 0;
let RYin = 0;
let RZin = 0;
let RBin = 0;
let GXin = 0;
let GYin = 0;
let GZin = 0;
let GBin = 0;
let BXin = 0;
let BYin = 0;
let BZin = 0;
let BBin = 0;
let countin = 0;
let RXout = 0;
let RYout = 0;
let RZout = 0;
let RBout = 0;
let GXout = 0;
let GYout = 0;
let GZout = 0;
let GBout = 0;
let BXout = 0;
let BYout = 0;
let BZout = 0;
let BBout = 0;
let fps = 0;
let count = 0;
let trail = 0;
let RXsave = 0;
let RYsave = 0;
let RZsave = 0;
let RBsave = 0;
let GXsave = 0;
let GYsave = 0;
let GZsave = 0;
let GBsave = 0;
let BXsave = 0;
let BYsave = 0;
let BZsave = 0;
let BBsave = 0;
let fpssave = 0;
let countsave = 0;
let trailsave = 0;
let startTime = new Date();
let endTime = 0;
let date = 0;
let ms = 0;
let sec = 0;
let anim = true;
let resizewidth = cdiv.clientWidth;
let resizeheight = cdiv.clientHeight;
let imgData3 = 0;
let expires = 0;
let cName = 0;
let load = 0;
function localsave() {
	localStorage.setItem("RXlocal", document.getElementById("RXinput").value);
	localStorage.setItem("RYlocal", document.getElementById("RYinput").value);
	localStorage.setItem("RZlocal", document.getElementById("RZinput").value);
	localStorage.setItem("RBlocal", document.getElementById("RBinput").value);
	localStorage.setItem("GXlocal", document.getElementById("GXinput").value);
	localStorage.setItem("GYlocal", document.getElementById("GYinput").value);
	localStorage.setItem("GZlocal", document.getElementById("GZinput").value);
	localStorage.setItem("GBlocal", document.getElementById("GBinput").value);
	localStorage.setItem("BXlocal", document.getElementById("BXinput").value);
	localStorage.setItem("BYlocal", document.getElementById("BYinput").value);
	localStorage.setItem("BZlocal", document.getElementById("BZinput").value);
	localStorage.setItem("BBlocal", document.getElementById("BBinput").value);
	localStorage.setItem("fpslocal", document.getElementById("fps").value);
	localStorage.setItem("countlocal", document.getElementById("count").value);
	localStorage.setItem("traillocal", document.getElementById("trail").value);
}
function localload() {
	document.getElementById("RXinput").value = localStorage.getItem("RXlocal");
	document.getElementById("RYinput").value = localStorage.getItem("RYlocal");
	document.getElementById("RZinput").value = localStorage.getItem("RZlocal");
	document.getElementById("RBinput").value = localStorage.getItem("RBlocal");
	document.getElementById("GXinput").value = localStorage.getItem("GXlocal");
	document.getElementById("GYinput").value = localStorage.getItem("GYlocal");
	document.getElementById("GZinput").value = localStorage.getItem("GZlocal");
	document.getElementById("GBinput").value = localStorage.getItem("GBlocal");
	document.getElementById("BXinput").value = localStorage.getItem("BXlocal");
	document.getElementById("BYinput").value = localStorage.getItem("BYlocal");
	document.getElementById("BZinput").value = localStorage.getItem("BZlocal");
	document.getElementById("BBinput").value = localStorage.getItem("BBlocal");
	document.getElementById("fps").value = localStorage.getItem("fpslocal");
	document.getElementById("count").value = localStorage.getItem("countlocal");
	document.getElementById("trail").value = localStorage.getItem("traillocal");
}
document.getElementById("stop").addEventListener("click", function () {
	anim = false;
});
document.getElementById("stop").addEventListener("click", function () {
	anim = false;
});
document.getElementById("start").addEventListener("click", function () {
	if (anim == false) {
		animate();
		anim = true;
	}
});
document.getElementById("reset").addEventListener("click", function () {
	location.reload();
});
document.getElementById("demo").addEventListener("click", function () {
	document.getElementById("RXinput").value = "(Math.sin(count/240)*400)+(Math.sin(count*2)*100)"
	document.getElementById("RYinput").value = "Math.cos(count/240)*50"
	document.getElementById("RZinput").value = "Math.abs(Math.sin(count/480))*Math.abs(Math.sin(count/480))*4"
	document.getElementById("RBinput").value = "ms"
	document.getElementById("GXinput").value = "GBout-300"
	document.getElementById("GYinput").value = "300"
	document.getElementById("GZinput").value = "2+2"
	document.getElementById("GBinput").value = "sec"
	document.getElementById("BXinput").value = "(Math.sin(BBout)*200)*Math.sin(count/Math.PI)"
	document.getElementById("BYinput").value = "(Math.cos(BBout)*200)+Math.cos(count/Math.PI)"
	document.getElementById("BZinput").value = "Math.abs(Math.sin(BBout))*Math.abs(Math.cos((count/Math.PI)/2)*Math.PI)+2"
	document.getElementById("BBinput").value = "count/240"
	document.getElementById("fps").value = "60"
	document.getElementById("count").value = "1.4"
	document.getElementById("trail").value = "95"
});
document.getElementById("clear").addEventListener("click", function () {
	document.getElementById("RXinput").value = ""
	document.getElementById("RYinput").value = ""
	document.getElementById("RZinput").value = ""
	document.getElementById("RBinput").value = ""
	document.getElementById("GXinput").value = ""
	document.getElementById("GYinput").value = ""
	document.getElementById("GZinput").value = ""
	document.getElementById("GBinput").value = ""
	document.getElementById("BXinput").value = ""
	document.getElementById("BYinput").value = ""
	document.getElementById("BZinput").value = ""
	document.getElementById("BBinput").value = ""
	document.getElementById("fps").value = ""
	document.getElementById("count").value = ""
	document.getElementById("trail").value = ""
	localStorage.clear();
	location.reload();
});
document.getElementById("save0").addEventListener("click", function () {
	cName = "save0"
	date = new Date();
	RXsave = document.getElementById("RXinput").value;
	RYsave = document.getElementById("RYinput").value;
	RZsave = document.getElementById("RZinput").value;
	RBsave = document.getElementById("RBinput").value;
	GXsave = document.getElementById("GXinput").value;
	GYsave = document.getElementById("GYinput").value;
	GZsave = document.getElementById("GZinput").value;
	GBsave = document.getElementById("GBinput").value;
	BXsave = document.getElementById("BXinput").value;
	BYsave = document.getElementById("BYinput").value;
	BZsave = document.getElementById("BZinput").value;
	BBsave = document.getElementById("BBinput").value;
	fpssave = document.getElementById("fps").value;
	countsave = document.getElementById("count").value;
	trailsave = document.getElementById("trail").value;
	cValue =
		RXsave + "," +
		RYsave + "," +
		RZsave + "," +
		RBsave + "," +
		GXsave + "," +
		GYsave + "," +
		GZsave + "," +
		GBsave + "," +
		BXsave + "," +
		BYsave + "," +
		BZsave + "," +
		BBsave + "," +
		fpssave + "," +
		countsave + "," +
		trailsave + ",";
	date.setTime(date.getTime() + (31536000));
	expires = "expires=" + date.toUTCString();
	document.cookie = cName + "=," + cValue + "; " + expires + "; path=/Test/04code/js/01calc/00.html" + "; " + "SameSite=Strict";
});
document.getElementById("load0").addEventListener("click", function () {
	load = document.cookie.split(",");
	document.getElementById("RXinput").value = load[1];
	document.getElementById("RYinput").value = load[2];
	document.getElementById("RZinput").value = load[3];
	document.getElementById("RBinput").value = load[4];
	document.getElementById("GXinput").value = load[5];
	document.getElementById("GYinput").value = load[6];
	document.getElementById("GZinput").value = load[7];
	document.getElementById("GBinput").value = load[8];
	document.getElementById("BXinput").value = load[9];
	document.getElementById("BYinput").value = load[10];
	document.getElementById("BZinput").value = load[11];
	document.getElementById("BBinput").value = load[12];
	document.getElementById("fps").value = load[13];
	document.getElementById("count").value = load[14];
	document.getElementById("trail").value = load[15];
});
document.getElementById("speed").addEventListener("click", function () {
	animate();
});
function resize() {
	imgData3 = ctxc3.getImageData(0, 0, canvasc3.width, canvasc3.height);
	canvasc0.width = cdiv.clientWidth;
	canvasc0.height = cdiv.clientHeight;
	canvasc1.width = inputside.clientWidth;
	canvasc1.height = inputside.clientHeight;
	canvasc2.width = cdiv.clientWidth;
	canvasc2.height = cdiv.clientHeight;
	canvasc3.width = cdiv.clientWidth;
	canvasc3.height = cdiv.clientHeight;
	ctxc3.putImageData(imgData3, (canvasc3.width - resizewidth) / 2, (canvasc3.height - resizeheight) / 2);
	resizewidth = cdiv.clientWidth;
	resizeheight = cdiv.clientHeight;
}
resize();
function backgroung() {
	Xmid = canvasc0.width / 2;
	Ymid = canvasc0.height / 2;
	ctxc0.lineWidth = 0.5;
	ctxc0.strokeStyle = "rgba(230,230,240,0.2)";
	ctxc0.beginPath();
	ctxc0.moveTo(canvasc0.width / 2, 0);
	ctxc0.lineTo(canvasc0.width / 2, canvasc0.height);
	ctxc0.stroke();
	ctxc0.beginPath();
	ctxc0.moveTo(0, Ymid);
	ctxc0.lineTo(canvasc0.width, Ymid);
	ctxc0.stroke();
	ctxc0.beginPath();
	ctxc0.moveTo(Xmid - 10, Ymid - 100);
	ctxc0.lineTo(Xmid + 10, Ymid - 100);
	ctxc0.stroke();
	ctxc0.beginPath();
	ctxc0.moveTo(Xmid + 100, Ymid - 10);
	ctxc0.lineTo(Xmid + 100, Ymid + 10);
	ctxc0.stroke();
	ctxc0.beginPath();
	ctxc0.moveTo(Xmid - 10, Ymid + 100);
	ctxc0.lineTo(Xmid + 10, Ymid + 100);
	ctxc0.stroke();
	ctxc0.beginPath();
	ctxc0.moveTo(Xmid - 100, Ymid - 10);
	ctxc0.lineTo(Xmid - 100, Ymid + 10);
	ctxc0.stroke();
	ctxc0.beginPath();
	ctxc0.moveTo(Xmid - 10, Ymid - 200);
	ctxc0.lineTo(Xmid + 10, Ymid - 200);
	ctxc0.stroke();
	ctxc0.beginPath();
	ctxc0.moveTo(Xmid + 200, Ymid - 10);
	ctxc0.lineTo(Xmid + 200, Ymid + 10);
	ctxc0.stroke();
	ctxc0.beginPath();
	ctxc0.moveTo(Xmid - 10, Ymid + 200);
	ctxc0.lineTo(Xmid + 10, Ymid + 200);
	ctxc0.stroke();
	ctxc0.beginPath();
	ctxc0.moveTo(Xmid - 200, Ymid - 10);
	ctxc0.lineTo(Xmid - 200, Ymid + 10);
	ctxc0.stroke();
	ctxc0.beginPath();
	ctxc0.moveTo(Xmid - 10, Ymid - 300);
	ctxc0.lineTo(Xmid + 10, Ymid - 300);
	ctxc0.stroke();
	ctxc0.beginPath();
	ctxc0.moveTo(Xmid + 300, Ymid - 10);
	ctxc0.lineTo(Xmid + 300, Ymid + 10);
	ctxc0.stroke();
	ctxc0.beginPath();
	ctxc0.moveTo(Xmid - 10, Ymid + 300);
	ctxc0.lineTo(Xmid + 10, Ymid + 300);
	ctxc0.stroke();
	ctxc0.beginPath();
	ctxc0.moveTo(Xmid - 300, Ymid - 10);
	ctxc0.lineTo(Xmid - 300, Ymid + 10);
	ctxc0.stroke();
}
backgroung();
window.onresize = function () {
	resize();
	backgroung();
};
function parse(str) {
	try {
		return Function(`"use strict"; return ${str}`)();
	} catch (e) { };
};
function renderc1() {
	RXin = document.getElementById("RXinput").value;
	RYin = document.getElementById("RYinput").value;
	RZin = document.getElementById("RZinput").value;
	RBin = document.getElementById("RBinput").value;
	GXin = document.getElementById("GXinput").value;
	GYin = document.getElementById("GYinput").value;
	GZin = document.getElementById("GZinput").value;
	GBin = document.getElementById("GBinput").value;
	BXin = document.getElementById("BXinput").value;
	BYin = document.getElementById("BYinput").value;
	BZin = document.getElementById("BZinput").value;
	BBin = document.getElementById("BBinput").value;
	countin = document.getElementById("count").value;
	endTime = new Date();
	ms = (endTime - startTime);
	sec = Math.floor((endTime - startTime) / 1000);
	if (countin > 0) {
		count += parse(countin);
	}
	RXout = parse(RXin);
	RYout = parse(RYin);
	RZout = parse(RZin);
	RBout = parse(RBin);
	GXout = parse(GXin);
	GYout = parse(GYin);
	GZout = parse(GZin);
	GBout = parse(GBin);
	BXout = parse(BXin);
	BYout = parse(BYin);
	BZout = parse(BZin);
	BBout = parse(BBin);
	ctxc1.font = "24px serif";
	ctxc1.fillStyle = "rgba(230,230,240,1)";
	ctxc1.fillText(RXout, 10, 115);
	ctxc1.fillText("RXout", 520, 115);
	ctxc1.fillText(RYout, 10, 175);
	ctxc1.fillText("RYout", 520, 175);
	ctxc1.fillText(RZout, 10, 235);
	ctxc1.fillText("RZout", 520, 235);
	ctxc1.fillText(RBout, 10, 295);
	ctxc1.fillText("RBout", 520, 295);
	ctxc1.fillText(GXout, 10, 355);
	ctxc1.fillText("GXout", 520, 355);
	ctxc1.fillText(GYout, 10, 415);
	ctxc1.fillText("GYout", 520, 415);
	ctxc1.fillText(GZout, 10, 475);
	ctxc1.fillText("GZout", 520, 475);
	ctxc1.fillText(GBout, 10, 535);
	ctxc1.fillText("GBout", 520, 535);
	ctxc1.fillText(BXout, 10, 595);
	ctxc1.fillText("BXout", 520, 595);
	ctxc1.fillText(BYout, 10, 655);
	ctxc1.fillText("BYout", 520, 655);
	ctxc1.fillText(BZout, 10, 715);
	ctxc1.fillText("BZout", 520, 715);
	ctxc1.fillText(BBout, 10, 775);
	ctxc1.fillText("BBout", 520, 775);
};
function renderc2() {
	ctxc2.clearRect(0, 0, canvasc2.width, canvasc2.height);
	ctxc2.drawImage(canvasc3, 0, 0);
	ctxc2.beginPath();
	ctxc2.arc(Xmid + RXout, Ymid - RYout, RZout, 0, 2 * Math.PI);
	ctxc2.fillStyle = "rgba(255,5,5,0.5)";
	ctxc2.fill();
	ctxc2.beginPath();
	ctxc2.arc(Xmid + GXout, Ymid - GYout, GZout, 0, 2 * Math.PI);
	ctxc2.fillStyle = "rgba(5,255,5,0.5)";
	ctxc2.fill();
	ctxc2.beginPath();
	ctxc2.arc(Xmid + BXout, Ymid - BYout, BZout, 0, 2 * Math.PI);
	ctxc2.fillStyle = "rgba(10,10,255,0.5)";
	ctxc2.fill();
};
function renderc3() {
	trail = document.getElementById("trail").value;
	ctxc3.clearRect(0, 0, canvasc3.width, canvasc3.height);
	ctxc3.drawImage(canvasc2, 0, 0);
	ctxc3.globalAlpha = (trail / 200) + 0.5;
};

function animate() {
	ctxc1.clearRect(0, 0, canvasc1.width, canvasc1.height);
	localsave();
	renderc1();
	renderc2();
	renderc3();
	fps = document.getElementById("fps").value;
	setTimeout(() => {
		if (anim == true) {
			requestAnimationFrame(animate);
		}
	}, 1000 / fps);
};
animate();
//window.addEventListener("click", (e) => {console.log(  )});