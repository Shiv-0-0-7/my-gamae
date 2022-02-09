var ground
var count=3
var score=0
function preload(){
  marioImg= loadAnimation("sprite_00.png","sprite_01.png","sprite_02.png",
  "sprite_03.png","sprite_04.png","sprite_05.png","sprite_06.png","sprite_07.png",
  "sprite_08.png","sprite_09.png","sprite_10.png","sprite_11.png","sprite_12.png");
  backgroundImage = loadImage("jungle.jpg");
 RocksImg= loadImage("rocks-48279_1280.png")
FoodImg=loadImage("ghjjk.png");
Food2Img=loadImage("ghjkl.png");
Food3Img=loadImage("ghj.png");

}



function setup() {
  createCanvas(windowWidth, windowHeight);
  
  //creating background
  scene = createSprite(0,0,width,height);
  scene.addImage(backgroundImage);
  scene.x=scene.width/2
  scene.velocityX = -3 
  scene.scale= 4
  Mario = createSprite(110,height-300,40,40)
  Mario.addAnimation("mario",marioImg)
Mario.scale = 2
ground=createSprite(400,height-100,width,10)
  ground.velocityX=-4
  ground.x=ground.width/2
  ground.visible=false
rockGroup=new Group()
FoodGroup=new Group()
}

function draw() {
 background(0);
 drawSprites();
  // moving ground
   if (ground.x<0){
     ground.x=ground.width/2
   }
    if (scene.x < 100){
      scene.x = scene.width/2;
    }
  if(keyDown("space")&& Mario.y>620 ){
    Mario.velocityY=-12

  }
  if (FoodGroup.isTouching(Mario)){
    for(var i=0;i<FoodGroup.length;i++){
      if (FoodGroup[i].isTouching(Mario)){
        FoodGroup[i].destroy()
        score=score+5
      }
    }
  }
  Mario.velocityY=Mario.velocityY+0.8
  Mario.collide(ground)
 if(rockGroup.isTouching(Mario)){
Mario.scale=0.75;
count=count-1

 }
console.log(Mario.y)
if(count<=0){
  textSize(100)
  fill("red")
text("game Over",width/2,height/2)
foodGroup.destroyEach()
foodGroup.setVelocityXEach(0)
rockGroup.setVelocityXEach(0)
}
spawnRocks()
  
  spawnFood();
  spawnFood2();
  spawnFood3();
  textSize(50);
fill("white");
  text("score="+score,100,100)
  text("lifes="+count,100,150)
}
function spawnFood(){
  if (frameCount%200==0){
var Food= createSprite(width,height/2,50,50)
Food.addImage(FoodImg)
Food.velocityX=-6
Food.scale=1
Food.lifetime=400
FoodGroup.add(Food)
}
}
function spawnFood2() {
  if (frameCount%407==0){

var Food2 = createSprite(width,height/2,50,50)
Food2.addImage(Food2Img)
Food2.velocityX=-6
Food2.scale=0.25
Food2.lifetime=400
FoodGroup.add(Food2)
}
}
function spawnFood3() {
  if (frameCount%925==0){
var Food3= createSprite(width,height/2,50,50)
Food3.addImage(Food3Img)
Food3.velocityX=-6
Food3.scale=0.5
Food3.lifetime=400
FoodGroup.add(Food3)
}
}

function spawnRocks()
{if (frameCount%300==0){
  var rocks = createSprite(width,height-150,20,20)
  rocks.addImage(RocksImg)
  rocks.velocityX=-5
rocks.scale=0.2
rocks.lifetime=400
rockGroup.add(rocks)
}


// Creating  arrows for bow
}