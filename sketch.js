<<<<<<< HEAD

function setup() {
  // put setup code here
createCanvas(200,200);
background(200,10,120);
=======
>>>>>>> b60c33885b05879688f7cd5e5494349760be8f0a


<<<<<<< HEAD
function draw() {
  //Put draw code here
  fill(30,40,200);
  circle(100,100,70);
=======
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
>>>>>>> b60c33885b05879688f7cd5e5494349760be8f0a


}
