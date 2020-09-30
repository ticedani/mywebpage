
let xpos = 0
let ypos = 0
let ballspeed = 5
let circleSize = 1

function setup() {
  // put setup code here
createCanvas(windowWidth, windowHeight);
background(204,204,255);

}


function draw() {
//background(204,204,255);
  //circle moves with arrow keys///////////////////////////////////////////////
fill(100,100,100)
circle(xpos, ypos, circleSize);

if( keyIsPressed & keyCode === UP_ARROW){
  ypos = ypos - ballspeed;
}

if( keyIsPressed & keyCode === DOWN_ARROW){
  ypos = ypos + ballspeed;
}

/////////random lines when go left/////////////////////////////////////////////
if( keyIsPressed & keyCode === LEFT_ARROW){
  xpos = xpos - ballspeed;

  for(let i = 0 ; i < 5 ; i = i + 1){
  let x1 = random (0 , width)
  let y1 = random (0 , ypos)
  let x2 = (xpos)
  let y2 = (ypos)


  ///////////color for lines//
  let rcol = random(0,50)
  let gcol = random(0,50)
  let bcol = random(0,50)
  let tran = random (100, 200)

  let wei = random (1,5)

  strokeWeight (wei)
  stroke(rcol, gcol, bcol,tran)

  line(x1,y1,x2,y2)
  }
////////////////////////////////////////////////////////////////////
}
if( keyIsPressed & keyCode === RIGHT_ARROW){
  xpos = xpos + ballspeed;

for(let i = 0 ; i < 5 ; i = i + 1){
// V DO I ADD XPOS, AND YPOS HERE??
let x1 = random (0 , xpos)
let y1 = random (0 , ypos)
let x2 = (xpos)
let y2 = (ypos)


///////////color for lines//
let rcol = random(0,250)
let gcol = random(0,10)
let bcol = random(0,255)
let tran = random (100, 200)

let wei = random (1,5)

strokeWeight (wei)
stroke(rcol, gcol, bcol,tran)

line(x1,y1,x2,y2)
}

}
}
