var bgimg;
var ground;
var PLAY = 1,END = 0;
var gameState = PLAY;
var obs1,obs2,obs3,obs4,obs5;
var re1,re2,re3,re4;
var rulesimg;
var diveranime_diving;
var diver;
var bubbleGroup;
var obstacleGroup;
var rewardGroup;
var score = 0;

function preload(){
  bgimg = loadImage("images/bg5.jpg");
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

  re1 = loadImage("images/re1.png");
  re2 = loadImage("images/re2.png");
  re3 = loadImage("images/re3.png");
  re4 = loadImage("images/re4.png");

  rulesimg = loadImage("images/ready.jpg");

  gameover = loadImage("images/over.jpg");

  music = loadSound("sound.mp3");
}
function setup() {
  createCanvas(displayWidth-5, displayHeight-205);
  bg=createSprite(displayWidth/2+10, displayHeight-550,displayWidth, displayHeight);
  bg.addImage(bgimg);
  bg.scale= 2.8;

  diver = createSprite(250,400,70,50);
  diver.addAnimation("diving",diveranime_diving);
  

  bubbleGroup = new Group();
  obstacleGroup = new Group();
  rewardGroup = new Group();
  
}

function draw() {
  //background(bgimg)

  if(gameState == PLAY){
    textSize(55);
    textFont("Times New Roman");
    fill("black");
    text("Score: " + score, displayHeight/2 - 200, displayWidth/2 + 500);

    bg.velocityX = -2;
    if(bg.x <600){
      bg.x = displayWidth/2+40  ;
    }
    if(keyDown(UP_ARROW)){
      diver.y = diver.y-4
    }
   
   
   if(keyDown(DOWN_ARROW)){
     diver.y = diver.y+4
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

  
   
    spwanBubbles();
    spawnObstacles();
    spawnRewards();
   
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
  
  diver.visible = false;
  }
  
  drawSprites();
 
  fill("white");
  stroke("black");
  strokeWeight(3);
  textSize(55);
  text("Score :"+score, 620 ,50);
  
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
      case 3: obstacle.addImage(obs3);
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
