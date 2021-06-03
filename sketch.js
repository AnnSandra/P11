
var trackImage,track;
var runImage,runner;
var leftBoundary,rightBoundary;

function preload(){
  //pre-load images
  trackImage= loadImage("path.png");
  runImage=loadAnimation("Runner-1.png","Runner-2.png");

}

function setup(){
  createCanvas(400,400);
  //create sprites here

  track= createSprite(200,200)
  track.addImage(trackImage);
  track.velocityY=2;
  track.y=track.height/2

  runner= createSprite(200,360);
  runner.addAnimation("runner",runImage);
  runner.scale=0.1;

  leftBoundary= createSprite(0,200,20,400);
  leftBoundary.visible=false;

  rightBoundary= createSprite(400,200,20,400);
  rightBoundary.visible=false;

}

function draw() {
  background(0);

  runner.x=mouseX;
  

  edges= createEdgeSprites();
  runner.collide(edges[3])
  runner.collide(leftBoundary);
  runner.collide(rightBoundary);

  if(track.y>400){
    track.y=height/2;
  }
  drawSprites();
}
