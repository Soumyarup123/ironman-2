var ironman;
var background;
var ironimg;
var bgimg;
var stoneimg;
var stonegroup;

function preload() 
{
  ironimg=loadImage("images/iron.png");
  bgimg=loadImage("images/bg.jpg");
  stoneimg=loadImage("images/stone.png");
}


function setup() {
  createCanvas(1200,600);
  ironman=createSprite(300,300,30,30)
  ironman.addImage(ironimg);
  ironman.scale=0.3;
  edges=createEdgeSprites();
  stonegroup=new Group();
}

function draw() {
  background(bgimg); 
  background.scale=2;
  ironman.setCollider("rectangle",100,0,200,400);
  ironman.debug=true;
  
  ironman.bounceOff(edges[0]);
  ironman.bounceOff(edges[1]);
  ironman.bounceOff(edges[2]);
  if(keyDown("up"))
  {
    ironman.velocityY=-10;
  }
  if(keyDown("left"))
  {
    ironman.x=ironman.x-10;
  }
  if(keyDown("right"))
  {
    ironman.x=ironman.x+10;
  }
  ironman.velocityY=ironman.velocityY+0.5;
  generatePlatforms()
  for(i=0;i<(stonegroup).length;i++)
  {
    var temp=stonegroup.get(i);
    if(temp.isTouching(ironman))
    {
      ironman.collide(temp);
    }
  }
  drawSprites()
}

function generatePlatforms() 
{
  if (frameCount % 60 === 0) {
    var brick = createSprite(1200, 10, 40, 10);
    brick.x = random(50, 850);
    brick.addImage(stoneimg);
    brick.velocityY = 5;
    brick.lifetime = 250;
    stonegroup.add(brick);
  }
}
