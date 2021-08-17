const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var snows = [];
var maxSnows = 50;

var backgroundImage;
var boy1, boy1Image, boy2, boy2Image;
var snowman, snowmanImage;
function preload(){
  backgroundImage = loadImage("snow1.jpg");
  boy1Image = loadImage("boy1.png");
  boy2Image = loadImage("boy2.png");
  snowmanImage = loadImage("snowman.png");

}


function setup() {
  createCanvas(displayWidth,displayHeight-180);

  engine = Engine.create();
    world = Engine.world;
    
    for(var i = 0; i<maxSnows; i++){
      snows.push(new Snows (random(0,400), random(0,700)));
    }

  boy1 = createSprite(400, 450, 50, 50);
  boy1.addImage("image", boy1Image);
  boy1.scale = 0.6;

  boy2 = createSprite(1090, 450, 50, 50);
  boy2.addImage("image2", boy2Image);
  boy2.scale = 0.6;

  snowman = createSprite(900,300);
  snowman.addImage(snowmanImage);
  snowman.scale = 0.5;

  

 
}

function draw() {
  background(backgroundImage); 

  Engine.update(engine);

  for(var i = 0; i<maxSnows; i++){
    snows[i].display();
    snows[i].update();
}
  
  if(keyDown(UP_ARROW)){
    boy1.y=boy1.y-5;
  }

  if(keyDown(DOWN_ARROW)){
    boy1.y=boy1.y+5;
  }

  if(keyDown(RIGHT_ARROW)){
    boy1.x=boy1.x+5;
  }

  if(keyDown(LEFT_ARROW)){
    boy1.x=boy1.x-5;
  }

 

  drawSprites();
}