var Engine = Matter.Engine,
    Render = Matter.Render,
    World = Matter.World,
    Bodies = Matter.Bodies;

const sh = window.innerHeight,
    sw = window.innerWidth;

console.log(Engine);
     
var engine = Engine.create();
engine.world.gravity.y = 1;
engine.timing.timeScale = 0.6;
engine.velocityIterations = 10;

var render = Render.create({
                element: document.querySelector(".test1"),
                engine: engine,
                options: {
                    width: sw,
                    height: sh,
                    wireframes: false,
                    background: "rgb(34, 34, 35"
                }
             });
        
var ground = Bodies.rectangle(sw/2, sh+50, sw + 100, 100, { isStatic: true });
var ceiling = Bodies.rectangle(sw/2, -50, sw, 100, { isStatic: true });
var wallA = Bodies.rectangle(-50, 0, 100, sh*2, { isStatic: true });
var wallB = Bodies.rectangle(sw+50, 0, 100, sh*2, { isStatic: true });

var boxes = [];

let stack = Matter.Composites.stack(200, sh-400, 20, 1, 20, 20, function(x,y){
    return Matter.Bodies.rectangle(x,y,80,80, {
        render: {
            fillStyle: 'rgb(50, 50, 50)',
        },
        friction: 0.2,
        restitution: 0.1,
        frictionAir: 0.02
    });
});


let mouse = Matter.Mouse.create(render.canvas);
let mouseConstraint = Matter.MouseConstraint.create(engine, {
  mouse: mouse,
  constraint: {
    render: {visible: false}
  }
});
render.mouse = mouse;

World.add(engine.world,[ground, mouseConstraint, stack, ceiling, wallA, wallB]);
  
Engine.run(engine);
Render.run(render);