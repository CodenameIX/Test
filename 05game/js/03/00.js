let canvas = document.getElementById("playground");
let ctx = canvas.getContext("2d");
let ballRadius = 12;
let x = canvas.width / 2;
let y = canvas.height / 2;
let dx = -2;
let dy = getRandom (0,2 * Math.PI);
let paddleHeight = 50;
let paddleWidth = 80;
let paddleY = (canvas.height - paddleHeight) / 2;

function getRandom(min, max) {
  return Math.random() * (max - min) + min
};


document.addEventListener("mousemove", mouseMoveHandler, false);
function mouseMoveHandler(e) {
  const relativeY = e.clientY - canvas.offsetTop;
  if (relativeY > 0 && relativeY < canvas.height) {
    paddleY = relativeY - paddleHeight / 2;
  }
}

function drawBall() {
  ctx.beginPath();
  ctx.arc(x, y, ballRadius, 0, Math.PI * 2);
  ctx.fillStyle = "#c8c8c8";
  ctx.fill();
  ctx.closePath();
}

function drawPaddle() {
  ctx.beginPath();
  ctx.rect(2, paddleY, paddleWidth, paddleHeight);
  ctx.fillStyle = "#c8c8c8";
  ctx.fill();
  ctx.closePath();
}


function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawBall();
  drawPaddle();

  if (y + dy > canvas.height - ballRadius || y + dy < ballRadius) {
    dy = -dy;
  }

  x += dx;
  y += dy;
  requestAnimationFrame(draw);
}

draw();