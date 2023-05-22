const canvas = document.createElement('canvas');
document.body.appendChild(canvas);
canvas.width = 5000;
canvas.height = 5000;
const ctx = canvas.getContext('2d');

function drawRect(x, y, width, height) {
  ctx.beginPath();
  ctx.rect(x, y, width, height);
  ctx.stroke();
}

function drawLine(x1, y1, x2, y2) {
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.stroke();
}

let nodes = [];

function createNode(x, y, width, height, text, color) {
    drawRect(x, y, width, height, color);
    ctx.fillText(text,x+width/2,y+height/2);
    nodes.push({x: x, y: y, width: width, height: height,text:text});
  }

function deleteNode(nodeIndex) {
  nodes.splice(nodeIndex, 1);
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (let i = 0; i < nodes.length; i++) {
    let node = nodes[i];
    drawRect(node.x,node.y,node.width,node.height);
  }
}

let isDragging = false;
let dragNodeIndex;

canvas.addEventListener('mousedown', (e) => {
  let mouseX = e.clientX - canvas.offsetLeft;
  let mouseY = e.clientY - canvas.offsetTop;
  for (let i = 0; i < nodes.length; i++) {
    let node = nodes[i];
    if (mouseX >= node.x && mouseX <= node.x + node.width && mouseY >= node.y && mouseY <= node.y + node.height) {
      isDragging = true;
      dragNodeIndex = i;
      break;
    }
  }
});

canvas.addEventListener('mousemove', (e) => {
  if (isDragging) {
    let movementX = e.movementX;
    let movementY = e.movementY;
    let dragNode = nodes[dragNodeIndex];
    dragNode.x += movementX;
    dragNode.y += movementY;
    ctx.clearRect(0,0,canvas.width,canvas.height);
    for (let i = 0; i < nodes.length; i++) {
      let node = nodes[i];
      drawRect(node.x,node.y,node.width,node.height);
    }
    redrawLines();
  }
});

canvas.addEventListener('mouseup', (e) => {
  isDragging = false;
});

let lines = [];

function connectNodes(nodeIndex1,nodeIndex2){
    let node1=nodes[nodeIndex1];
    let node2=nodes[nodeIndex2];
    let x1=node1.x+node1.width/2;
    let y1=node1.y+node1.height/2;
    let x2=node2.x+node2.width/2;
    let y2=node2.y+node2.height/2;
    drawLine(x1,y1,x2,y2);
    lines.push({nodeIndex1:nodeIndex1,nodeIndex2:nodeIndex2});
}

function redrawLines(){
   for(let i=0;i<lines.length;i++){
       let line=lines[i];
       connectNodes(line.nodeIndex1,line.nodeIndex2);
   }
}

createNode(250,50,100,50);
createNode(450,50,100,50);
createNode(650,50,100,50,"Node 1");