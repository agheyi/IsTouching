var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  //fixedRect.debug = true;
  sprite1 = createSprite(800, 100, 50, 50);
  sprite2 = createSprite(500, 100, 10, 50);
  sprite1.shapeColor = "green";
  sprite2.shapeColor = "green";
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  //movingRect.debug = true;

  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;

  sprite1.velocityX = -5;
  sprite2.velocityX = 5;
}

function draw() {
  background(0,0,0);  

  bounceOff(movingRect, fixedRect)
  bounceOff(sprite1, sprite2);
  if (isTouching(movingRect, fixedRect) || isTouching(sprite1, sprite2))
  {
    background(255, 0, 0);
  }
  
  drawSprites();
}