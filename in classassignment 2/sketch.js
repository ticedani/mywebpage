
let xpos = 200
let ypos = 0
let xballspeed = 7
let yballspeed = 5
random(0,10000)

function setup() {
  // put setup code here
createCanvas(windowWidth, windowHeight);
}

function draw() {
  //Put draw code here
  background(20,20,20);
  fill(mouseX, mouseY,200);
  circle(xpos,ypos ,100);

  xpos = xpos + xballspeed
  ypos = ypos + yballspeed

//
  if(xpos > width){
  xballspeed = -xballspeed
  }

  if (xpos < 0){
    xballspeed = -xballspeed
  }

  if(ypos > windowHeight){
    yballspeed = -yballspeed
  }

  if(ypos < 0){
    yballspeed = -yballspeed
  }

if (mouseIsPressed & dist (mouseX, mouseY,xpos ,ypos) < 70){
xpos= random(0,windowWidth)
ypos= random(0,windowHeight)

}
}
