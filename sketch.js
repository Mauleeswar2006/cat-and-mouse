var cat,CatAnimation,mouseAnimation1;
var mouse,vmouseAnimation,mouseAnimation1;
var garden;
function preload() {
    //load the images here
    CatAnimation1 = loadAnimation("images/cat1.png");
    CatAnimation2 = loadAnimation("images/cat2.png","images/cat3.png");
    CatAnimation3 = loadAnimation("images/cat4.png");
    mouseAnimation1 = loadAnimation("images/mouse1.png");
    mouseAnimation2 = loadAnimation("images/mouse2.png","images/mouse3.png");
    mouseAnimation3 = loadAnimation("images/mouse4.png");
    gardenImg = loadImage("images/garden.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    //createCanvas(1000,800);
    //create tom and jerry sprites here
    /*
    garden = createSprite(500,400);
    garden.addImage(gardenImg);
    garden.scale = 2.5;
    */
    mouse = createSprite(200,600);
    mouse.addAnimation("Mouse1",mouseAnimation1);
    mouse.addAnimation("Mouse2",mouseAnimation2);
    mouse.addAnimation("Mouse3",mouseAnimation3);
    mouse.scale = 0.15;

    cat = createSprite(870,570);
    cat.addAnimation("Cat1",CatAnimation1)
    cat.addAnimation("Cat2",CatAnimation2)
    cat.addAnimation("Cat3",CatAnimation3)
    cat.scale = 0.2;

   
}

function draw() {

    background(gardenImg);

    //Write condition here to evalute if tom and jerry collide
    if (cat.x-mouse.x<cat.width/2-mouse.width/2){
        cat.velocityX = 0;
        mouse.velocityX = 0;
        cat.changeAnimation("Cat3",CatAnimation3);
        mouse.changeAnimation("Mouse2",mouseAnimation2);
        cat.x = 300;
    }
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  if (keyCode === LEFT_ARROW){
      cat.changeAnimation("Cat2",CatAnimation2);
      cat.velocityX = -5;
      mouse.frameDelay = 25;
      
    //cat.addAnimation("catRunning",catAnimation);
    mouse.changeAnimation("Mouse3",mouseAnimation3);
}
}
