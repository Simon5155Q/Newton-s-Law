
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine, world;
var ball1, ball2, ball3, ball4, ball5;
var chain1, chain2, chain3, chain4, chain5;
var roof1;
function setup() {
	createCanvas(windowWidth, windowHeight);

	engine = Engine.create();
	world = engine.world;

ball1 = new Ball(768, 768);
ball2 = new Ball(833, 768);
ball3 = new Ball(898, 768);
ball4 = new Ball(963, 768);
ball5 = new Ball(1028, 768);

roof1 = new Roof(898, 100, 280, 20);

chain1 = new SlingShot(ball1.body, {x: 768, y: 100})
chain2 = new SlingShot(ball2.body, {x: 833, y: 100})
chain3 = new SlingShot(ball3.body, {x: 898, y: 100})
chain4 = new SlingShot(ball4.body, {x: 963, y: 100})
chain5 = new SlingShot(ball5.body, {x: 1028, y: 100})




	//Engine.run(engine);
  
}


function draw() {
Engine.update(engine);
  background("white");

  ball1.display();
  ball2.display();
  ball3.display();
  ball4.display();
  ball5.display();

  chain1.display();
  chain2.display();
  chain3.display();
  chain4.display();
  chain5.display();
  roof1.display();
}

function mouseDragged(){
	Matter.Body.setPosition(ball1.body,{x: mouseX, y: mouseY});
	}