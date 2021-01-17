
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(900, 700);
 

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);

	bobdiameter=35
	bob1= new Bob(400,600,bobdiameter);
	bob2= new Bob(400-bobdiameter*2,600,bobdiameter);
	bob3= new Bob(400-bobdiameter*4,600,bobdiameter);
    bob4= new Bob(400+bobdiameter*2,600,bobdiameter);
	bob5= new Bob(400+bobdiameter*4,600,bobdiameter);

	roof=new Roof(390,100,700,25);
  
	rope1=new Rope(bob1.body,roof.body,-bobdiameter,0);
	rope2=new Rope(bob2.body,roof.body,-bobdiameter*2,0);
//	rope3=new Rope(bob3.boby,roof.body,-bobdiameter*4,0);
//	rope4=new Rope(bob4.boby,roof.body,+bobdiameter*2,0);
	//rope5=new Rope(bob5.boby,roof.body,+bobdiameter*4,0);
}


function draw() {
  rectMode(CENTER);
  background(255);

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  roof.display();
  
  rope1.display();
  rope2.display();
  //rope3.display();
// rope4.display();
 //rope5.display();

  drawSprites();
 
}



