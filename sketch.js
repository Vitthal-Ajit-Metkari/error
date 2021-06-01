const  Engine = Matter.Engine;
const  World = Matter.World;
const  Events = Matter.Events;
const  Bodies = Matter.Bodies;

var particles = [];
var plinkos = [];
var divisions = [];
var divisionHeight = 300;
var score = 0;
var engine, world, body,matter;

 
function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);

  for (var v = 0; v <= width; v=v+80) {
    divisions.push(new divisions(v, height-divisionHeight/2,10,divisionHeight));
  }
 
  for (var i = 75;i <= width; i=i+50)
  {
     plinkos.push(new Plinko(i,75));
  }

  for (var t = 50; t <= width-10; t=t+50)
  {
    plinkos.push(new Plinko(t,175));
  }

  for (var t = 75; t<=width; t=t+50)
  {
    plinkos.push(new Plinko(t,275));
  }

  for (var h = 50; h <width-10; h=h+50)
  {
    plinkos.push(new Plinko(h,375));
  }
}

function draw() {
  background("black");  

  Engine.update(engine);
  ground.display();

  for (var a=0 ; a< plinkos.length; a++){
    plinkos[a].display();
  }

  if (frameCount%60 === 0){
    particles.push(new Particle(random(width/2-30, width/2+30),10,10));
    score++;
  }

  for (var l = 0; l<particles.length; l++) {
    particles[l].display();
  }
  
  for (var m = 0; m< divisions.length; m++){
    divisions[m].display();
  }
}