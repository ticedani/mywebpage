let xpos;
let ypos;
let xoffset;
let rcol;
let gcol;
let bcol;


function setup() {

createCanvas(windowWidth,700);
background(255);
strokeWeight(0.05)
stroke(1);
frameRate(20)
xoffset = 0.0
rcol = 1
gcol = 1.1
bcol = 1.3
}

function draw(){

  rcol += 0.1;
  gcol += 0.1;
  bcol += 0.1;


////red////////
ypos = 00
xpos = noise(xoffset)*width;

fill(noise(rcol)*255,noise(gcol)*20,noise(bcol)*20,150)
rect(xpos,ypos,100)

xoffset = xoffset + 0.17

////orange////////
ypos = 100
xpos = noise(xoffset)*width;

fill(noise(rcol)*255,noise(gcol)*132,noise(bcol)*0,130)
rect(xpos,ypos,100)

xoffset = xoffset + 0.16
////yellow////////
ypos = 200
xpos = noise(xoffset)*width;

fill(noise(rcol)*255,noise(gcol)*255,noise(bcol)*0,110)
rect(xpos,ypos,100)

xoffset = xoffset + 0.015
////green////////
ypos = 300
xpos = noise(xoffset)*width;

fill(noise(rcol)*20,noise(gcol)*255,noise(bcol)*20,90)
rect(xpos,ypos,100)

xoffset = xoffset + 0.014
////blue////////
ypos = 400
xpos = noise(xoffset)*width;

fill(noise(rcol)*0,noise(gcol)*60,noise(bcol)*255,70)
rect(xpos,ypos,100)

xoffset = xoffset + 0.013
////indigo////////
ypos = 500
xpos = noise(xoffset)*width;

fill(noise(rcol)*155,noise(gcol)*0,noise(bcol)*255,50)
rect(xpos,ypos,100)

xoffset = xoffset + 0.012
////violet////////
ypos = 600
xpos = noise(xoffset)*width;

fill(noise(rcol)*255,noise(gcol)*0,noise(bcol)*200,30)
rect(xpos,ypos,100)

xoffset = xoffset + 0.011

}
