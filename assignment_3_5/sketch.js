let x1;
let y1;
let x2;
let y2;
let x3;
let y3;
let x4;
let y4;
let rcol;
let gcol;
let bcol;


function setup() {
  // put setup code here
createCanvas(windowWidth, windowHeight);
background(100,0,200);
stroke(0,50)
noFill();
frameRate(10)
rcol = 1
gcol = 1.1
bcol = 1.3
}
function draw(){


x1 = random(0,width);
y1 = random(0,height);
x2 = random(0,width);
y2 = random(0,height);
x3 = random(0,width);
y3 = random(0,height);
x4 = random(0,width);
y4 = random(0,height);



rcol += 0.1;
gcol += 0.1;
bcol += 0.1;

fill(noise(rcol)*255,noise(gcol)*20,noise(bcol)*255,)
noStroke()
bezier(x1,y1,x2,y2,x3,y3,x4,y4);


fill(18,43,92);
rect(0,0, width,height/2);

fill(255, 0, 64);
arc(500, height/2, 280, 280, PI, TWO_PI)


}
