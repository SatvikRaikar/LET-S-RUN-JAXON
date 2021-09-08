var jaxon, jaxon_running, edges;
var path, pathImage;
var invisibleGroundR;
var invisibleGroundL;

function preload(){
  //pre-load images
  jaxon_running = loadAnimation("Runner-1.png","Runner-2.png");
  pathImage = loadImage("path.png");
}

function setup(){
  createCanvas(1360,600);
 

   //creating path
   path=createSprite(685,200)
   path.addImage("moving",pathImage);
   path.velocityY = 10;
   path.scale = 1.2; 
 

  //create sprites here
  jaxon=createSprite(685,500,10,20);
  jaxon.addAnimation("running",jaxon_running);
  jaxon.scale = 0.10;

  invisibleBoundaryL = createSprite(440,200,100,800);
  invisibleBoundaryL.visible = false;
 
  invisibleBoundaryR = createSprite(956,200,100,800);
  invisibleBoundaryR.visible = false;
  

}

function draw() {
  background(0);

  if(keyDown("left")){
    jaxon.velocityX=-10;
  }
  if(keyDown("right")){
    jaxon.velocityX=10;
  }

  edges= createEdgeSprites();
  jaxon.collide(invisibleBoundaryL);
  jaxon.collide(invisibleBoundaryR);



if (path.y > 400){
  path.y=height/2
}  

 drawSprites();
}