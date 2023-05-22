const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d"); // CTX MEANS CONTEXT
ctx.canvas.width = window.innerWidth;
ctx.canvas.height = window.innerHeight;
let particleArray;
// get mouse mouse position ///////////////////////////////
let mouse = {
  x: null,
  y: null,
  radius: ((canvas.height / 80) * (canvas.width / 80))
}
window.addEventListener('mousemove',
  function (event) {
    mouse.x = event.x;
    mouse.y = event.y;
  });
// create Particle
class Particle {
  constructor(x, y, directionX, directionY, size, color) {
    this.x = x;
    this.y = y;
    this.directionX = directionX;
    this.directionY = directionY;
    this.size = size;
    this.color = color;
    this.speedX = this.directionX;
    this.speedY = this.directionY;
  }
  // create method to draw individual particle
  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
    ctx.fillStyle = 'rgba(0, 0, 0, 0)';
    ctx.fill();
  }
  // check particle position, check mouse position, move the paticle, draw the particle
  update() {
    // check if particle is still within canvas
    if (this.x - 100 > canvas.width || this.x < -100) {
      this.directionX = -this.directionX;
      this.speedX = this.directionX;
    } if (this.y - 100 + this.size > canvas.height || this.y - this.size < -100) {
      this.directionY = -this.directionY;
      this.speedY = this.directionY;
    }
    // check mouse position/particle position - collision detection
    let dx = mouse.x - this.x;
    let dy = mouse.y - this.y;
    let distance = Math.sqrt(dx * dx + dy * dy) * 2;
    if (distance < mouse.radius + this.size) {
      if (mouse.x < this.x && this.x < canvas.width - this.size * 10) {
        this.x += 1;
        }
        if (mouse.x > this.x && this.x > this.size * 10) {
        this.x -= 1;
        }
        if (mouse.y < this.y && this.y < canvas.height - this.size * 10) {
        this.y += 1;
        }
        if (mouse.y > this.y && this.y > this.size * 10) {
        this.y -= 1;
        }
    }
    // move particle
    this.x += this.directionX;
    this.y += this.directionY;
    // call draw method
    this.draw();
  }
}
// check if particles are close enough to draw line between them
function connect() {
  let lines = 20;
  let line;
  let colR;
  let colG;
  let colB;
  let opacity;
  for (let a = 0; a < particleArray.length; a++) {
    line = 0;
    for (let b = a; b < particleArray.length; b++) {
      line++;
      let distance = ((particleArray[a].x - particleArray[b].x) * (particleArray[a].x - particleArray[b].x))
        + ((particleArray[a].y - particleArray[b].y) * (particleArray[a].y - particleArray[b].y));
      if (distance < (canvas.width / 8) * (canvas.height / 8) && line <= lines) {
        opacity = 0.5 - (distance / 50000);
        colR = ((distance / 50));
        colG = ((distance / 40) - (b / 4));
        colB = ((distance / 50) + (b / 4));
        ctx.strokeStyle = 'rgba(' + colR + ',' + colG + ',' + colB + ',' + opacity + ')';
        ctx.beginPath();
        ctx.lineWidth = 3;
        ctx.moveTo(particleArray[a].x, particleArray[a].y);
        ctx.lineTo(particleArray[b].x, particleArray[b].y);
        ctx.stroke();
      }
    }
  }
}
// create particle array 
function init() {
  particleArray = [];
  let numberOfParticles = (canvas.height * canvas.width) / 8000;
  for (let i = 0; i < numberOfParticles; i++) {
    let size = 2;
    let x = (Math.random() * ((innerWidth)));
    let y = (Math.random() * ((innerHeight)));
    let directionX = (Math.random() * 2) - 1;
    let directionY = (Math.random() * 2) - 1;
    particleArray.push(new Particle(x, y, directionX, directionY, size));
  }
}
// create animation loop
const fps = 24;
function animate() {
  setTimeout(() => {
    requestAnimationFrame(animate);
  }, 1000 / fps);
  ctx.clearRect(0, 0, innerWidth, innerHeight);
  for (let i = 0; i < particleArray.length; i++) {
    particleArray[i].update();
  }
  connect();
}


init();
animate();
// RESIZE SETTING - empty and refill particle array every time window changes size + change canvas size
window.addEventListener('resize',
  function () {
    canvas.width = innerWidth;
    canvas.height = innerHeight;
    mouse.radius = ((canvas.height / 80) * (canvas.width / 80));
    init();
  }
)
// 2) SET MOUSE POSITION AS UNDEFINED when it leaves canvas//////
window.addEventListener('mouseout',
  function () {
    mouse.x = undefined;
    mouse.y = undefined;
  }
)
