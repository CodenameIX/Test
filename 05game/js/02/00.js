let canvas = document.getElementById("playground");
let ctx = canvas.getContext("2d");
let ballRadius = 12;
let x = canvas.width / 2;
let y = canvas.height / 2;
let dx = -2;
let dy = getRandom (0,2 * Math.PI);
let paddleHeight = 98;
let paddleWidth = 14;
let paddleY = (canvas.height - paddleHeight) / 2;
let paddleHeightNPC = 98;
let paddleWidthNPC = 14;
let paddleYNPC = (canvas.height - paddleHeight) / 2;

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

drawPaddleNPC(NPCHandler);
function NPCHandler(e) {
  const relativeY = e.clientY - canvas.offsetTop;
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

function drawPaddleNPC() {
  ctx.beginPath();
  ctx.rect((canvas.width - paddleWidthNPC) - 2,(y -(paddleHeightNPC / 2)), paddleWidthNPC, paddleHeightNPC);
  ctx.fillStyle = "#c8c8c8";
  ctx.fill();
  ctx.closePath();
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawBall();
  drawPaddle();
  drawPaddleNPC()
  paddleYNPC = (y -(paddleHeightNPC / 2))

  if (y + dy > canvas.height - ballRadius || y + dy < ballRadius) {
    dy = -dy;
  }

  if (x + dx < ballRadius) {
    if (y + ballRadius > paddleY && y < paddleY + paddleHeight) {
      dx = -dx;
    } else {
      alert("GAME LOST");
      document.location.reload();
      clearInterval(interval);
    }
  }

  if (x + dy > canvas.width - ballRadius) {
    if (y + ballRadius > paddleYNPC && y < paddleYNPC + paddleHeightNPC) {
      dx = -dx;
    } else {
      alert("GAME WON");
      document.location.reload();
      clearInterval(interval);
    }
  }

  x += dx;
  y += dy;
  requestAnimationFrame(draw);
}

draw();