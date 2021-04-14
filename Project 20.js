ar cat,CatAnimation,mouseAnimation1;
var mouse,vmouseAnimation,mouseAnimation1;
var garden;
function preload() {
    //load the images here
    CatAnimation = loadAnimation("cat1.png","cat2.png","cat3.png");
    mouseAnimation = loadAnimation("mouse3.png","mouse2.png");
    gardenImg = loadImage("garden.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    garden = createSprite(500,400);
    garden.addImage(gardenImg);
    garden.scale = 0.5;

    cat = createSprite(400,200);
    cat.scale = 0.5;

    mouse = createSprite(100,200);
    
    mouse.scale = 0.5;
}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide
    
keyPressed();
    drawSprites();
}


function keyPressed(){
  //For moving and changing animation write code here
if (keycode === LEFT_ARROW){
    cat.velocityX = -5;
    cat.addAnimation("catRunning",catAnimation);
    mouse.addAnimation("mouseThinking",mouseAnimation);
}

    
}

}
