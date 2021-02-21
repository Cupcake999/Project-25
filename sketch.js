
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject	
var world;
var paperObj,dustbinObj;
var paperImg,dustbinImg;
var bin,ball;
var paper_obj
function preload(){

paperImg = loadImage("paper.png")
dustbinImg = loadImage("dustbingreen.png")

}

function setup() {
	createCanvas(1400, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	groundObject=new ground(width/2,670,width,20);
	dustbinObj=new dustbin(1200,650);
    paperObj = new Paper(250,150,20)

	bin = createSprite(1200,525,10,10);
	bin.addImage("bin",dustbinImg)
	bin.scale = 0.9;
	Engine.run(engine);

	//paper_obj = createSprite(250,150,20,10)
    //paper_obj.addImage("paper",paperImg)

}


function draw() {
  rectMode(CENTER);
  background(230);
  
  groundObject.display();
  dustbinObj.display();
paperObj.display();

 
keyPressed();
drawSprites();
}

function keyPressed(){

	if (keyCode === RIGHT_ARROW){

		Matter.Body.applyForce(paperObj.body,paperObj.body.position,{x:650,y:-100})

	}

}

