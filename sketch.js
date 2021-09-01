var runner, runnerAnimation
var path, pathImg
var coin, coinImg
var bomb, bombImg
var energy_drink, energy_drinkImg
var insivible_wall
var invivislbe_wall2
var coins = 0


function preload(){
  //pre-load images
  runnerAnimation = loadAnimation("Runner-1.png","Runner-2.png");
  energy_drinkImg = loadImage("energyDrink.png")
  coinImg = loadImage("coin.png")
  bombImg = loadImage("bomb.png")
  pathImg = loadImage("path.png")
}

function setup(){
  createCanvas(305,400);
  //create sprites here
  edges = createEdgeSprites();

  path = createSprite(150,100)
  path.addImage(pathImg)
  
  insivible_wall = createSprite(10,200,20,400)
  invivislbe_wall2 = createSprite(290,200,20,400)

  insivible_wall.visible = false;
  invivislbe_wall2.visible = false;

  runner = createSprite(150,350,20,50)
  runner.addAnimation("running", runnerAnimation) 
  runner.scale = .05
  
 
  //path.visible = false;

  
  
}

function draw() {
  background("blue");
  text("Coins:" + coins , 200, 200)
  fill("blue")
  runner.bounceOff(edges)
  runner.x = mouseX

  path.velocityY =  4;

  if (path.y > 400){
    path.y = path.width/2;
  }
  if (runner.isTouching(coin)){
    coin.destroy();
    coins = coins + 1
  }



  spawnObstacles();
  drawSprites();
}

function spawnObstacles(){
  if (frameCount % Math.round(random(0,600)) === 0){
    var obstacle = createSprite(Math.round(random(50,250)),-50,10,40);
    coin = createSprite(Math.round(random(50,250)),-50,10,40)
    obstacle.velocityY = 12
     // //generate random obstacles
     var rand = Math.round(random(1,3));
     switch(rand) {
       case 1: obstacle.addImage(energy_drinkImg);
               break;
       case 2: obstacle.addImage(coinImg);
               break;
       case 3: obstacle.addImage(bombImg);
               break;
       default: break;
     }

   //assign scale and lifetime to the obstacle           
     
    obstacle.lifetime = 450;
    obstacle.scale = .15
   
    //adding obstacles to the group
    //obstaclesGroup.add(obstacle);
  }
 }