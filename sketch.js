var movingRect,fixedRect;
var car,wall;

function setup() {
  createCanvas(800,400);
  movingRect=  createSprite(400, 200, 50, 50);
  fixedRect=createSprite(200,200,100,50);
  movingRect.shapeColor="blue";
  fixedRect.shapeColor="red";
  movingRect.velocityX=-2;
  fixedRect.velocityX=2;
}

function draw() {
  background(255,255,255);
 
  if (isTouching(movingRect,fixedRect)){
      movingRect.shapeColor="red";
      fixedRect.shapeColor="blue";
    }
    bounceOff (movingRect,fixedRect);
  drawSprites();
  }
