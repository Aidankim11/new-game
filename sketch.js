const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world;
var ground;

function setup() 
{
  createCanvas(500,600);
  frameRate(80);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(200,580,600,20);
  rope=new Rope(4,{x:250,y:20})
  food= Bodies.circle(250, 200, 20)
  Composite.add(rope.body,food)
  connect=new Link(rope,food)
  rectMode(CENTER);
  ellipseMode(RADIUS);
  
  
}

function draw() 
{
  background(51);
  ground.show();
  rope.show()
  Engine.update(engine);
  ellipse(food.position.x, food.position.y,20)

 
   
}
