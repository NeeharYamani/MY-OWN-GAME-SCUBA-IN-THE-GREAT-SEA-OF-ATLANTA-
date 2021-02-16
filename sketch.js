var bgimg;
var ground;
var PLAY = 1,END = 0;
var gameState = PLAY;
var obs1,obs2,obs3,obs4,obs5,obs6,obs7,obs8,obs9;
var re1,re2,re3,re4,re5;
var rulesimg;
var diveranime_diving;
var diver;
var bubbleGroup;
var obstacleGroup;
var rewardGroup;
var obstacle2Group;
var reward2Group;
var score = 0;
var reset;
var resetimg;
var bg2img;

function preload(){
  bgimg = loadImage("images/5.png");

  bg2img = loadImage("images/bg8.jpg")
  
  diveranime_diving = loadAnimation("images/s.png", "images/c.png", "images/u.png",  "images/b.png", "images/a.png", "images/d.png"," images/i.png", "images/v.png");

  bubble1 = loadImage("images/bubble1.png");
  bubble2 = loadImage("images/bubble2.png");
  bubble3 = loadImage("images/bubble3.png");
  bubble4 = loadImage("images/bubble4.png");

  obs1 = loadImage("images/obs1.png");
  obs2 = loadImage("images/obs2.png");
  obs3 = loadImage("images/obs3.png");
  obs4 = loadImage("images/obs4.png");
  obs5 = loadImage("images/obs5.png");
  obs6 = loadImage("images/obs6.png");
  obs7 = loadImage("images/obs7.png");
  obs8 = loadImage("images/obs8.png");
  obs9 = loadImage("images/obs9.png");

  re1 = loadImage("images/re1.png");
  re2 = loadImage("images/re2.png");
  re3 = loadImage("images/re3.png");
  re4 = loadImage("images/re4.png");
  re5 = loadImage("images/re5.png");

  rulesimg = loadImage("images/ready.jpg");

  gameover = loadImage("images/over.jpg");

  music = loadSound("sound.mp3");

  resetimg = loadImage("images/reset1.png");
}
function setup() {
  createCanvas(displayWidth-5, displayHeight-205);
  bg=createSprite(displayWidth/2+10, displayHeight-550,displayWidth, displayHeight);
  bg.addImage(bgimg);
  bg.scale= 2.8;

  diver = createSprite(250,400,70,50);
  diver.addAnimation("diving",diveranime_diving);
  
  restart = createSprite(780,500);
  restart.addImage("restart", resetimg);
  restart.scale = 0.7;
  restart.visible = false;

  bubbleGroup = new Group();
  obstacleGroup = new Group();
  rewardGroup = new Group();
  obstacle2Group = new Group();
  reward2Group = new Group();
  
}

function draw() {
  //background(bgimg)

  if(gameState == PLAY){
    textSize(55);
    textFont("Times New Roman");
    fill("black");
    text("Score: " + score, displayHeight/2 - 200, displayWidth/2 + 500);

    bg.velocityX = -2;
    spwanBubbles();
    spawnObstacles();
    spawnRewards();
    if(bg.x <680){
      bg.x = displayWidth/2+40  ;
    }
    if(keyDown(UP_ARROW)){
      diver.y = diver.y-20
    }
   
   
   if(keyDown(DOWN_ARROW)){
     diver.y = diver.y+20
   }
   if(diver.isTouching(obstacleGroup)){
     gameState = END;
   }
   if(diver.isTouching(rewardGroup)){
     score = score+1;
   }

   if(bg.velocityX = -2){
    
   }
   

   if(diver.isTouching(rewardGroup)){
     rewardGroup.destroyEach();
     score = score + 4;
   }

   if(score==10){
     gameState = "LEVEL2"

   }
  
}

  
  
  else if(gameState==END){
  bg.velocityX = 0;
  obstacleGroup.setVelocityXEach(0);
  diver.velocityY = 0;
  rewardGroup.setVelocityXEach(0);
  obstacleGroup.destroyEach();
  rewardGroup.destroyEach();
  bubbleGroup.destroyEach();
  bg.addImage(gameover);
  restart.visible = true;
  diver.visible = false;
  if(mousePressedOver(restart)){
    reset();
  }
  }


  if(gameState=="LEVEL2"){

   
    bg.addImage(bg2img);
     bg.velocityX = -2;
     if(bg.x <680){
      bg.x = displayWidth/2+40  ;
    }
    if(keyDown(UP_ARROW)){
      diver.y = diver.y-20
    }
   
   
   if(keyDown(DOWN_ARROW)){
     diver.y = diver.y+20
   }

   if(diver.isTouching(reward2Group)){
     reward2Group.destroyEach();
     score = score+10;
   }
   if(diver.isTouching(obstacle2Group)){
         obstacle2Group.destroyEach();
         score = 0;
   }
   spawnObstacles2();
   spwanBubbles();
   spawnRewards2();
  }
  drawSprites();
  
  fill("white");
  stroke("black");
  strokeWeight(3);
  textSize(55);
  text("Score :"+score, 620 ,50);

  if(gameState=="LEVEL2"){
    textSize(75);
    fill("black");
    stroke("white");
    strokeWeight(3);
    text("LEVEL-2", 580,120);
  }
  if(gameState==PLAY){
    textSize(75);
    fill("yellow");
    stroke("white");
    strokeWeight(3);
    text("LEVEL-1", 580,120);
  }
  
}

function spwanBubbles(){
  if(frameCount % 100 == 0){
    var bubble = createSprite(random(displayWidth/2-600,displayWidth/2+600),displayHeight/2+200);
    bubble.velocityY = -4;
    var rand= Math.round(random(1,4));
    switch(rand){
      case 1: bubble.addImage(bubble1);
      break;
      case 2: bubble.addImage(bubble2);
      break;
      case 3: bubble.addImage(bubble3);
      break;
      case 4: bubble.addImage(bubble4);
      break;
      default: break;
    }
    bubble.scale = 0.5;
    bubble.liftime = 300;
    bubbleGroup.add(bubble);
  }
  diver.depth = diver.depth + 1;
  bubbleGroup.depth = bubbleGroup.depth - 1;
}
function spawnObstacles(){
  if(frameCount % 80 ==0){
    var obstacle  = createSprite(displayWidth/2+480,random(displayHeight/2-500,displayHeight/2+500));
    obstacle.velocityX = -4;
    var rand= Math.round(random(1,5));
    switch(rand){
      case 1: obstacle.addImage(obs1);
      break;
      case 2: obstacle.addImage(obs2);
      break;
      case 3: obstacle.addImage(obs6);
      break;
      case 4: obstacle.addImage(obs4);
      break;
      case 5: obstacle.addImage(obs5);
      break;
     default: break;
    }
    obstacle.scale = 0.5;
    obstacle.lifetime = 400;
    obstacleGroup.add(obstacle);
  }
  diver.depth = diver.depth + 1;
  obstacleGroup.depth = obstacleGroup.depth - 1;
  
}
function spawnRewards(){
  if(frameCount % 90 ==0){
    var reward  = createSprite(displayWidth/2+450,random(displayHeight/2-480,displayHeight/2+500));
    reward.velocityX = -4;
    var rand= Math.round(random(1,4));
    switch(rand){
      case 1: reward.addImage(re1);
      break;
      case 2: reward.addImage(re2);
      break;
      case 3: reward.addImage(re3);
      break;
      case 4: reward.addImage(re4);
      break;
      
     default: break;
    }
    reward.scale = 0.6;
    reward.lifetime = 300;
    rewardGroup.add(reward);
  }
  diver.depth = diver.depth + 1;
  rewardGroup.depth = rewardGroup.depth - 1;
}
function reset(){
  gameState = PLAY;
  restart.visible = false;
  bg.addImage(bgimg);
  diver.visible = true;
 }
 function spawnObstacles2(){
  if(frameCount % 80 ==0){
    var obstacle  = createSprite(displayWidth/2+480,random(displayHeight/2-500,displayHeight/2+500));
    obstacle.velocityX = -9;
    var rand= Math.round(random(1,4));
    switch(rand){
      case 1: obstacle.addImage(obs3);
      break;
      case 2: obstacle.addImage(obs7);
      break;
      case 3: obstacle.addImage(obs8);
      break;
      case 4: obstacle.addImage(obs9);
      break;
     default: break;
    }
    obstacle.scale = 1;
    obstacle.lifetime = 400;
    obstacle2Group.add(obstacle);
  }
  diver.depth = diver.depth + 1;
  obstacle2Group.depth = obstacle2Group.depth - 1;
  
}
function spawnRewards2(){
  if(frameCount % 120 ==0){
    var reward  = createSprite(displayWidth/2+450,random(displayHeight/2-480,displayHeight/2+500));
    reward.velocityX = -10;
    var rand= Math.round(random(1,5));
    switch(rand){
      case 1: reward.addImage(re1);
      break;
      case 2: reward.addImage(re2);
      break;
      case 3: reward.addImage(re3);
      break;
      case 4: reward.addImage(re4);
      break;
      case 5: reward.addImage(re5);
     default: break;
    }
    reward.scale = 0.6;
    reward.lifetime = 300;
    reward2Group.add(reward);
  }
  diver.depth = diver.depth + 1;
  reward2Group.depth = reward2Group.depth - 1;
}