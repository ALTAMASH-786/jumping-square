var canvas;
var music;
var box1,box2,box3,box4,box5,box6,box7,box8,movingBox;


function preload(){
    music = loadSound("music.mp3");

}


function setup(){
    canvas = createCanvas(600,600);
    music.play();
    //create 4 different surfaces
    box1 = createSprite(100,590,300,100);
    box1.shapeColor="pink";
    box2 = createSprite(100,10,300,100);
    box2.shapeColor="rgb(100,200,200)";
    box3 = createSprite(500,10,300,100);
    box3.shapeColor="violet";
    box4 = createSprite(500,590,300,100);
    box4.shapeColor="lightgreen";
    box5 = createSprite(300,10,100,400);
    box5.shapeColor="orange";
    box6 = createSprite(10,300,100,400);
    box6.shapeColor="rgb(200,450,450)";
    box7 = createSprite(590,300,100,400);
    box7.shapeColor="rgb(300,300,100)";
    box8 = createSprite(300,590,100,400);
    box8.shapeColor="royalblue";

   //create box sprite and give velocity
    movingBox = createSprite(300,300,60,60);
    movingBox.shapeColor="torquise";
    movingBox.velocityX=3;
    movingBox.velocityY=7;
    
}
  function draw() {
    background("black");
    //create edgeSprite
   //createEdgeSprites();
 // bounceOff();
  isTouch();
drawSprites();
  //add condition to check if box touching surface and make it bo }
 
  }

  function bounceOff(){
  
    movingBox.bounceOff(box1);
    movingBox.bounceOff(box2);
    movingBox.bounceOff(box3);
    movingBox.bounceOff(box4);
    movingBox.bounceOff(box5);
    movingBox.bounceOff(box6);
    movingBox.bounceOff(box7);
    movingBox.bounceOff(box8);
  }
 
function isTouch(){

  if(movingBox.isTouching(box1)){
    movingBox.shapeColor="lightgreen";
      movingBox.velocityX= -(movingBox.velocityX)
      movingBox.velocityY = -(movingBox.velocityY)
   } 
   if(movingBox.isTouching(box2)){
    movingBox.shapeColor="purple";
   } 
   if(movingBox.isTouching(box3)){
    movingBox.shapeColor="pink";
   } 
   if(movingBox.isTouching(box4)){
    movingBox.shapeColor="violet";
   } 
   if(movingBox.isTouching(box5)){
    movingBox.shapeColor="blue";
   } 
   if(movingBox.isTouching(box6)){
    movingBox.shapeColor="brown";
   } 
   if(movingBox.isTouching(box7)){
    movingBox.shapeColor="rgb(300,240,240";
   } 
   if(movingBox.isTouching(box8)){
    movingBox.shapeColor="royalblue";
   } 
    

}
