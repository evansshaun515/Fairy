var fairyImg; 
//fairyImg, fairy1Img, fairy2Img;

var stars, starsImg;

var starynight, starynightImg;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine;
var world;

function preload()
{
   //preload the images here
   fairyImg = loadAnimation('fairy1.png','fairy2.png');
   //fairyImg = loadAnimation('fairy1.png');

   starsImg = loadImage('star.png');

   starynightImg = loadImage('starnight.png');
}

function setup() {
  createCanvas(800, 750);
 
  engine = Engine.create();
  world = engine.world;
 
  starynight = Bodies.rectangle(400,375,20,20);
  starynight.addImage(starynightImg);
  starynight.scale = 0.5;
  World.add(world,starynight);
  
  fairy = Bodies.rectangle(100,600,50,50);
  fairy.addAnimation('flying',fairyImg);
  fairy.scale = 0.2;
  World.add(world,fairy);

  var stars_options =
  {
    isStatic: true
  }

  stars = Bodies.rectangle(650,25,20,20,stars_options);
  stars.addImage(starsImg);
  stars.scale = 0.2;
  World.add(world,stars);                                                                                   

  

}


function draw() {
  background("black");
  Engine.update(engine);

  if (keyDown('right'))
  {
    fairy.x = fairy.x + 3;
  }

  

  edges = createEdgeSprites();
  fairy.bounceOff(edges);

  drawSprites();
}
