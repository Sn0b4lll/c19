
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball;

var ground, lground, rground;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
	var balloptions={
		isStatic:false,
		restitution:0.3,
		friction:0,
		density:1.2
		}
	//Create the Bodies Here.
	ball=Bodies.circle(200, 600, 20, balloptions)
	World.add(world,ball)
	ground = new Box(400, 680, 800, 10)
	lground = new Box(550, 640, 10, 80)
	rground = new Box(690, 640, 10, 80)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground.display()
  lground.display()
  rground.display()
  ellipse(ball.position.x,ball.position.y,40)
  drawSprites();

}
function keyPressed(){
	if(keyCode=== UP_ARROW){
		Matter.Body.applyForce(ball, ball.position, {x:40,y:-70})
	}
}



