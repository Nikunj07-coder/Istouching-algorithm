function setup() {

createCanvas(800,400);
fixed_Rect = createSprite(400, 200, 50, 50);
moving_Rect = createSprite(300,200,50,50)
}

function draw() {
  background(255,255,255);
  moving_Rect.x=mouseX;
  moving_Rect.y=mouseY;
  console.log(fixed_Rect.x);
  console.log(fixed_Rect.y);
  if(moving_Rect.x-fixed_Rect.x<moving_Rect.width/2+fixed_Rect.width/2 && 
    fixed_Rect.x-moving_Rect.x<moving_Rect.width/2+fixed_Rect.width/2 &&
    moving_Rect.y-fixed_Rect.y<moving_Rect.height/2+fixed_Rect.height/2 && 
    fixed_Rect.y-moving_Rect.y<moving_Rect.height/2+fixed_Rect.height/2 ){
    fixed_Rect.shapeColor="red";
    moving_Rect.shapeColor="red";
  }

  else{
    fixed_Rect.shapeColor="green";
    moving_Rect.shapeColor="green";
  }
  drawSprites();
}
