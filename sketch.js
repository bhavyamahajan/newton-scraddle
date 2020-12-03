
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bobObject1, bobObject2, bobObject3, bobObject4, bobObject5;
var roof;
var string1, string2, string3, string4, string5;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	roof = new Roof(400, 100, 600, 40);

	bobObject1 = new Bob(200, 500, 100);
	bobObject2 = new Bob(300, 500, 100);
	bobObject3 = new Bob(400, 500, 100);
	bobObject4 = new Bob(500, 500, 100);
	bobObject5 = new Bob(600, 500, 100);

	string1 = new String(bobObject1.body, roof.body, -200, 0);
	string2 = new String(bobObject2.body, roof.body, -100, 0);
	string3 = new String(bobObject3.body, roof.body, -0, 0);
	string4 = new String(bobObject4.body, roof.body, 100, 0);
	string5 = new String(bobObject5.body, roof.body, 200, 0);

	Engine.run(engine);
  
}

function draw() {
  rectMode(CENTER);
  background("white");

  Engine.update(engine);

  roof.display();

  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();

  string1.display();
  string2.display();
  string3.display();
  string4.display();
  string5.display();
  
  drawSprites();
 
}

function keyPressed() {
	if (keyCode === LEFT_ARROW) {

	  Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x:-700,y:-205});

	}
	if (keyCode === RIGHT_ARROW) {

	  Matter.Body.applyForce(bobObject5.body,bobObject5.body.position,{x:700,y:205});

	}
}

