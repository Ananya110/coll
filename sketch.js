var fixedRect1,movingRect1;
var fixedRect2,movingRect2;
var fixedRect3,movingRect3;
function setup() {
  createCanvas(1200,800);
  fixedRect1 = createSprite(1100, 400, 50, 80);
  fixedRect1.shapeColor = "green";
  fixedRect1.debug = true;
  movingRect1 = createSprite(400,400,80,30);
  movingRect1.shapeColor = "green";
  movingRect1.debug = true;

  fixedRect2 = createSprite(1100, 300, 50, 80);
  fixedRect2.shapeColor = "green";
  fixedRect2.debug = true;
  movingRect2 = createSprite(400,300,80,30);
  movingRect2.shapeColor = "green";
  movingRect2.debug = true;

  fixedRect3 = createSprite(1100, 200, 50, 80);
  fixedRect3.shapeColor = "green";
  fixedRect3.debug = true;
  movingRect3 = createSprite(400,200,80,30);
  movingRect3.shapeColor = "green";
  movingRect3.debug = true;

  fixedRect4 = createSprite(1100, 500, 50, 80);
  fixedRect4.shapeColor = "green";
  fixedRect4.debug = true;
  movingRect4 = createSprite(400,500,80,30);
  movingRect4.shapeColor = "green";
  movingRect4.debug = true;
  

}

function draw() {
  background("lightBlue");  
  movingRect1.x = World.mouseX;
  movingRect2.x = World.mouseX;
  movingRect3.x = World.mouseX;
  movingRect4.x = World.mouseX;

  if (movingRect1.x - fixedRect1.x < fixedRect1.width/2 + movingRect1.width/2
      && fixedRect1.x - movingRect1.x < fixedRect1.width/2 + movingRect1.width/2
      && movingRect1.y - fixedRect1.y < fixedRect1.height/2 + movingRect1.height/2
      && fixedRect1.y - movingRect1.y < fixedRect1.height/2 + movingRect1.height/2) {
    movingRect1.shapeColor = "red";
    fixedRect1.shapeColor = "red";
  }
  else {
    movingRect1.shapeColor = "green";
    fixedRect1.shapeColor = "green";
  }

  if (movingRect2.x - fixedRect2.x < fixedRect2.width/2 + movingRect2.width/2
    && fixedRect2.x - movingRect2.x < fixedRect2.width/2 + movingRect2.width/2
    && movingRect2.y - fixedRect2.y < fixedRect2.height/2 + movingRect2.height/2
    && fixedRect2.y - movingRect2.y < fixedRect2.height/2 + movingRect2.height/2) {
  movingRect2.shapeColor = "blue";
  fixedRect2.shapeColor = "blue";
}
else {
  movingRect2.shapeColor = "white";
  fixedRect2.shapeColor = "white";
}

if (movingRect3.x - fixedRect3.x < fixedRect3.width/2 + movingRect3.width/2
  && fixedRect3.x - movingRect3.x < fixedRect3.width/2 + movingRect3.width/2
  && movingRect3.y - fixedRect3.y < fixedRect3.height/2 + movingRect3.height/2
  && fixedRect3.y - movingRect3.y < fixedRect3.height/2 + movingRect3.height/2) {
movingRect3.shapeColor = "yellow";
fixedRect3.shapeColor = "yellow";
}
else {
movingRect3.shapeColor = "orange";
fixedRect3.shapeColor = "orange";
}

if (movingRect4.x - fixedRect4.x < fixedRect4.width/2 + movingRect4.width/2
  && fixedRect4.x - movingRect4.x < fixedRect4.width/2 + movingRect4.width/2
  && movingRect4.y - fixedRect4.y < fixedRect4.height/2 + movingRect4.height/2
  && fixedRect4.y - movingRect4.y < fixedRect4.height/2 + movingRect4.height/2) {
movingRect4.shapeColor = "pink";
fixedRect4.shapeColor = "pink";
}
else {
movingRect4.shapeColor = "purple";
fixedRect4.shapeColor = "purple";
}
  drawSprites();
}