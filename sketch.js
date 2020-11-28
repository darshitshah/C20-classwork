var fixedRect, movingRect;



function setup() {
  createCanvas(800,400);
  fixedRect=createSprite(400, 200, 50, 50);
movingRect = createSprite(350,200,50,50);
movingRect.shapeColor = "red"
fixedRect.shapeColor="yellow"
fixedRect.debug =true
movingRect.debug=true

}

function draw() {
background(0);

movingRect.x= mouseX
movingRect.y=mouseY
console.log(fixedRect.x-movingRect.x)

if(fixedRect.x-movingRect.x<fixedRect.width/2+movingRect.width/2&& 
  movingRect.x-fixedRect.x<fixedRect.width/2+movingRect.width/2&& 
  fixedRect.y-movingRect.y<fixedRect.height/2+movingRect.height/2&&
  movingRect.y-fixedRect.y<fixedRect.height/2+movingRect.height/2){
movingRect.shapeColor="blue"
fill("white")
textSize(50)
text("touch",400,400)

}
else 
{
  movingRect.shapeColor= "red"
}
  drawSprites();
}