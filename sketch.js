const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world, object;

function setup() {
  createCanvas(400,400);
 
  engine = Engine.create();
  world = engine.world;
  var options={
    restitution:1.0
  }
  ball=Bodies.circle(200,100,25,options);
  World.add(world,ball)
var g_options={
  isStatic:true
}
ground=Bodies.rectangle(200,400,400,20,g_options);
World.add(world,ground);

}

function draw() {
  background(0);
  Engine.update(engine);
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,400,20);
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,25);
  
}