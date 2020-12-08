
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var groundObject,dustbinObject,ballObject;
var engine,world;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 800);

	engine = Engine.create();
	world = engine.world;

	groundObject=new Ground(700,650,1800,15)
	dustbinObject=new dustbin(1200,630);
	ballObject = new ball(200,570,20);
	



	Engine.run(engine);
  
}


function draw() {
  //rectMode(CENTER);
  background(0);

  groundObject.display();
  dustbinObject.display();
   ballObject.display();
  
  drawSprites();
 
}

function keyPressed()
{
if(keyCode === UP_ARROW){

Matter.Body.applyForce(ballObject.body,ballObject.body.position,{x:90,y:-80})

}





}

