
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var boy, mango;
var stone, tree;

function preload()
{
	boyImage = loadImage(" Images/Plucking mangoes/boy.png");
	mangoImage = loadImage(" Images/Plucking mangoes/mango.png");
	stoneImage = loadImage(" Images/Plucking mangoes/stone.png");
	treeImage = loadImage(" Images/Plucking mangoes/tree.png");
}

function setup() {
	createCanvas(800, 700);
	boy = createSprite(100, 600, 50, 50);
	boy.addImage(boyImage)
	boy.scale = 0.1



	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	tree1 = new Tree(600, 450, 300, 500);
	stone1 = new Stone(100, 200, 30, 30);
	ground1 = new Ground(400, 670, 900, 40);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  tree1.display();
  stone1.display();
  ground1.display();
  drawSprites();
 
}



