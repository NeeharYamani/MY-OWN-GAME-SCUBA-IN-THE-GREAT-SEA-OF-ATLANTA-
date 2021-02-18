var bgimg;
var ground;
var PLAY = 1,END = 0;
var gameState = PLAY;
var obs1,obs2,obs3,obs4,obs5,obs6,obs7,obs8,obs9;
var re1,re2,re3,re4,re5;
var endimg;
var rulesimg;
var diveranime_diving;
var diver;
var bubbleGroup;
var obstacleGroup;
var rewardGroup;
var obstacle2Group;
var reward2Group;
var obstacle3Group;
var fishGroup;
var keyGroup;
var score = 0;
var reset;
var resetimg;
var bg2img;
var bg3img;
var fishes;
var keyimg;
var bg4img;
var treasureimg;

function preload(){
  bgimg = loadImage("images/5.png");

  bg2img = loadImage("images/bg8.jpg");

  bg3img = loadImage("images/bg9.jpg");

  bg4img = loadImage("images/bg10.jpg");
  
  diveranime_diving = loadAnimation("images/s.png", "images/c.png", "images/u.png",  "images/b.png", "images/a.png", "images/d.png"," images/i.png", "images/v.png");

  endimg = loadAnimation("images/c1.png","images/c2.png","images/c3.png","images/c4.png","images/c5.png","images/c6.png");

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
  fishes = loadImage("images/fishes.png");

  re1 = loadImage("images/re1.png");
  re2 = loadImage("images/re2.png");
  re3 = loadImage("images/re3.png");
  re4 = loadImage("images/re4.png");
  re5 = loadImage("images/re5.png");

  rulesimg = loadImage("images/ready.jpg");

  gameover = loadImage("images/over.jpg");

  sound = loadSound("images/sound.mp3");

  resetimg = loadImage("images/reset1.png");

  keyimg = loadImage("images/key.png");

  treasureimg = loadImage("images/t.png");

  music = loadSound("images/music.mp3");
  
  bgm = loadSound("images/bgm.mp3")

  win = loadSound("images/win.mp3")

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
  obstacle3Group = new Group();
  fishGroup = new Group();
  keyGroup  = new Group();
  
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
     music.play();
   }
   if(diver.isTouching(rewardGroup)){
     sound.play();
     score = score+1;
   }

   if(bg.velocityX = -2){
    
   }
   

   if(diver.isTouching(rewardGroup)){
    sound.play();
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
    sound.play();
     reward2Group.destroyEach();
     score = score+10;
   }
   if(diver.isTouching(obstacle2Group)){
         obstacle2Group.destroyEach();
         music.play();
         score = 0;
   }
   if(score==50){
    gameState = "LEVEL3"
  }
   spawnObstacles2();
   spwanBubbles();
   spawnRewards2();
  }

  if(gameState=="LEVEL3"){

   
    bg.addImage(bg3img);
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
    sound.play();
     reward2Group.destroyEach();
     score = score+10;
   }
   if(diver.isTouching(obstacle3Group)){
         obstacle3Group.destroyEach();
         music.play();
         score = 0;
   }
   if(diver.isTouching(fishGroup)){
     fishGroup.destroyEach();
     music.play();
     score=0;
   }
   if(diver.isTouching(keyGroup)){
     gameState = "WIN";
   }
     

   spawnObstacles3();
   spwanBubbles();
   spawnRewards2();
   spawnFishes();
   spawnKey();
  }
 
  drawSprites();
  if(gameState=="WIN"){
    bg.addImage(bg4img);
    bg.velocityX = 0;
 
    
    

    textSize(55);
    fill("black");
    stroke("white");
    strokeWeight(4);
    text("YOU WIN CONGRATULATIONS!", displayWidth/2-380,displayHeight/2-300);

    var treasure = createSprite(displayWidth/2,displayHeight/2);
    treasure.addImage(treasureimg);

    reward2Group.destroyEach();
    fishGroup.destroyEach();
    obstacle3Group.destroyEach();
    keyGroup.destroyEach();
    bubbleGroup.destroyEach();
    diver.visible = false;
  }
  
  
  fill("white");
  stroke("black");
  strokeWeight(3);
  textSize(55);
  text("Score :"+score, 620 ,50);

  if(gameState==PLAY){
    textSize(75);
    fill("yellow");
    stroke("white");
    strokeWeight(3);
    text("LEVEL-1", 580,120);
  }
  if(gameState=="LEVEL2"){
    textSize(75);
    fill("black");
    stroke("white");
    strokeWeight(3);
    text("LEVEL-2", 580,120);
  }
  if(gameState=="LEVEL3"){
    textSize(75);
    fill("red");
    stroke("black");
    strokeWeight(3);
    text("LEVEL-3", 580,120);
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
    var obstacle  = createSprite(displayWidth/2+480,random(displayHeight/2-300,displayHeight/2+300));
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
    var reward  = createSprite(displayWidth/2+450,random(displayHeight/2-300,displayHeight/2+300));
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
    var obstacle  = createSprite(displayWidth/2+480,random(displayHeight/2-200,displayHeight/2+300));
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
    var reward  = createSprite(displayWidth/2+450,random(displayHeight/2-300,displayHeight/2+300));
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
function spawnObstacles3(){
  if(frameCount % 80 ==0){
    var obstacle  = createSprite(displayWidth/2+480,random(displayHeight/2-300,displayHeight/2+300));
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
    obstacle3Group.add(obstacle);
  }
  diver.depth = diver.depth + 1;
  obstacle3Group.depth = obstacle3Group.depth - 1;
  
}
function spawnFishes(){
  if(frameCount % 80 ==0){
    var fish  = createSprite(displayWidth/2+480,random(displayHeight/2-300,displayHeight/2+300));
    fish.addImage(fishes);
    fish.velocityX = -9;

    fish.lifetime = 400;
    fish.scale = 0.4;
    fishGroup.add(fish);
  }
 
  diver.depth = diver.depth+1;
  
}
function spawnKey(){
  if(frameCount % 1500 ==0){
    var key  = createSprite(displayWidth/2+480,random(displayHeight/2-300,displayHeight/2+300));
    key.addImage(keyimg);
    key.velocityX = -4;

    key.lifetime = 400;
    key.scale = 0.2
    keyGroup.add(key);
   }
   diver.depth = diver.depth+1;
   obstacle3Group.depth = obstacle3Group.depth+1;
   fishGroup.depth = fishGroup.depth+1;
   reward2Group.depth = reward2Group.depth+1;
   rewardGroup.depth = rewardGroup.depth+1;
   bubbleGroup.depth = bubbleGroup.depth+1;
}