var Engine = Matter.Engine,
    Render = Matter.Render,
    World = Matter.World,
    Bodies = Matter.Bodies;

const sh = window.innerHeight,
    sw = window.innerWidth;

console.log(Engine);
     
var engine = Engine.create();
engine.world.gravity.y = 0.1;
engine.timing.timeScale = 0.5;
engine.velocityIterations = 1;

var render = Render.create({
                element: document.querySelector(".test1"),
                engine: engine,
                options: {
                    width: sw,
                    height: sh,
                    wireframes: false,
                    background: "rgb(24, 24, 25)"
                }
             });
        
var ground = Bodies.rectangle(sw/2, sh+50, sw + 100, 100, { isStatic: true });
var ceiling = Bodies.rectangle(sw/2, -50, sw, 100, { isStatic: true });
var wallA = Bodies.rectangle(-50, 0, 100, sh*2, { isStatic: true });
var wallB = Bodies.rectangle(sw+50, 0, 100, sh*2, { isStatic: true });

var boxes = [];

let stack = Matter.Composites.stack(1100, sh-400, 10, 10, -20, -20, function(x,y){
    return Matter.Bodies.rectangle(x,y,40,40, {
        render: {
            fillStyle: 'black',
        },
        friction: 0,
        restitution: 1.1,
        frictionAir: 0
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