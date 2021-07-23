
function preload(){
  bg=loadImage("images/iss.png");
  sleep= loadAnimation("images/sleep.png");
  brush= loadAnimation("images/brush.png");
  gym = loadAnimation("images/gym1.png","images/gym2.png");
  eat= loadAnimation("images/eat1.png", "images/eat2.png");
  drink= loadAnimation("images/drink1.png", "images/drink2.png");
  move= loadAnimation("images/move.png", "images/move1.png");
  bath= loadAnimation("images/bath1.png", "images/bath2.png");
}



function setup() {
  createCanvas(windowWidth,windowHeight);
  createSprite(400, 200, 50, 50);

  astronaut= createSprite(300,230);
  astronaut.addAnimation("sleeping", sleep);
  astronaut.scale=0.1;
}

function draw() {
  background(bg); 
  

  if (keyDown("UP_ARROW")){
    astronaut.addAnimation("brushing", brush);
    astronaut.changeAnimation("brushing");
    astronaut.y=350;
    astronaut.velocityX= 0;
    astronaut.velocityY= 0;
  }

  if (keyDown("DOWN_ARROW")){
    astronaut.addAnimation("gymming", gym);
    astronaut.changeAnimation("gymming");
    astronaut.y=350;
    astronaut.velocityX= 0;
    astronaut.velocityY= 0;
  }

  if (keyDown("LEFT_ARROW")){
    astronaut.addAnimation("bathing", bath);
    astronaut.changeAnimation("bathing");
    astronaut.y=350;
    astronaut.velocityX= 0;
    astronaut.velocityY= 0;
  }

  if (keyDown("RIGHT_ARROW")){
    astronaut.addAnimation("eating", eat);
    astronaut.changeAnimation("eating");
    astronaut.y=350;
    astronaut.velocityX= 0;
    astronaut.velocityY= 0;
  }

  if (keyDown("m")){
    astronaut.changeAnimation("moving",move);
    astronaut.velocityX= 1;
    astronaut.velocityY= 1;
  }
  
  text("Up Arrow = Brushing",180, 145);
  text("Down Arrow = Gymming",180, 135);
  text("Left Arrow = Eating",180, 125);
  text("Right Arrow = Bathing",180, 115);
  text("m key = moving",180, 105);



  drawSprites();
}

