var balloon;

function preload(){
  bgImg = loadImage("images/bg.png");
  balloonImg = loadImage("images/balloon1.png");
}

function setup() {
  database = firebase.database();
  createCanvas(800,800);

  balloon = createSprite(400, 400, 20, 20);
  balloon.addImage(balloonImg);

}

function draw() {
  background(bgImg); 

  if(keyDown(LEFT_ARROW)){
    writePosition(-1,0);
  }
  else if(keyDown(RIGHT_ARROW)){
    writePosition(1,0);
  }
  else if(keyDown(UP_ARROW)){
    writePosition(0,-1);
  }
  else if(keyDown(DOWN_ARROW)){
    writePosition(0,+1);
  }
  
  drawSprites();
}

  
function writePosition(x,y){
  database.ref('balloon/position').set({
    'x': position.x + x,
    'y': position.y + y
  })
}

function readPosition(data){
  position = data.val();
  console.log(position.x);
  balloon.x = position.x;
  balloon.y = position.y;
}

function showError(){
  console.log("Error in writing to the database");
}