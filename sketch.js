
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var mario,marioImg;
var backgroundImg;
var brick1,brick2,brick3,brick4,brick5;
var world, engine;
var score;

function preload()
{
	marioImg = loadImage("Mario.png");
	backgroundImg = loadImage("Background.png");
}

function setup() {
	createCanvas(700, 500);
	engine = Engine.create();
	world = engine.world;

	//mario = createSprite(100,400,20,20);
	mario = Bodies.rectangle(100,400,20,50);
	World.add(world,mario);

	//mario.addImage(marioImg);
	mario.scale = 0.2;

 	invisibleGround = createSprite(300,450,800,10);
  	invisibleGround.visible = true;
  
	score = 0;

	brick1 = new Brick(100,200,40,40);
	brick2 = new Brick(160,250,40,40);
	brick3 = new Brick(220,200,40,40);
	brick4 = new Brick(280,250,40,40);
	brick5 = new Brick(340,200,40,40);
	brick6 = new Brick(400,250,40,40);
	brick7 = new Brick(460,200,40,40);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	

	Engine.run(engine);


}


function draw() {
	Engine.update(engine);
  rectMode(CENTER);
  background(backgroundImg);
  push();
  translate(mario.position.x, mario.position.y);
  rotate(mario.angle);
  imageMode(CENTER);
  image(marioImg,0,0,100,100);
  pop();
  brick1.display();
  brick2.display();
  brick3.display();
  brick4.display();
  brick5.display();
  brick6.display();
  brick7.display();

  //mario.collide(invisibleGround); 
  
  /*if(mario.isTouching(brick3)){
	score = score + 1;
	console.log(score)
  }*/

 

 /* */

  drawSprites();
  Move();
 
  
}
function Move(){
	if (keyDown("UP_ARROW" )) {
		mario.velocity.y = mario.velocity.y-5;
		console.log(mario.velocity.y);
		//mario.velocityY = mario.velocityY + 0.8
	   }

	   if (keyDown("DOWN_ARROW")) {
		mario.position.y = mario.position.y+10;
	   }
	   
	   if (keyDown("LEFT_ARROW")) {
		mario.position.x = mario.position.x-10;
	   
	   }            
	   
	   if (keyDown("RIGHT_ARROW")) {
		mario.position.x = mario.position.x+10;
	   }

	   if(keyDown("SPACE"))
	   {
		   mario.velocity.y = -5;
	   }


}