
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
let offset;


function setup() {
  // put setup code here
createCanvas(windowWidth, windowHeight);
background(100);
stroke(0,50)
offset = 0.0
noFill();

frameRate(10)
rcol = 1
gcol = 1.1
bcol = 1.3
}
function draw(){
background(0)
//bule bezier/////
x1 = noise(offset)*width;
y1 = noise(offset + 40)*height;
x2 = noise(offset + 10)*width;
y2 = noise(offset + 50)*height;
x3 = noise(offset + 20)*width;
y3 = noise(offset + 60)*height;
x4 = noise(offset + 30)*width;
y4 = noise(offset + 70)*height;



rcol += 0.1;
gcol += 0.1;
bcol += 0.1;

//fill(noise(rcol)*20,noise(gcol)*20,noise(bcol)*255)
stroke(noise(rcol)*20,noise(gcol)*20,noise(bcol)*255)
bezier(x1,y1,x2,y2,x3,y3,x4,y4);

offset = offset + 0.01



/////red bezier ///////
x1 = noise(offset)*width;
y1 = noise(offset + 45)*height;
x2 = noise(offset + 15)*width;
y2 = noise(offset + 55)*height;
x3 = noise(offset + 25)*width;
y3 = noise(offset + 65)*height;
x4 = noise(offset + 35)*width;
y4 = noise(offset + 75)*height;



rcol += 0.1;
gcol += 0.1;
bcol += 0.1;

//fill(noise(rcol)*255,noise(gcol)*20,noise(bcol)*25,)
stroke(noise(rcol)*255,noise(gcol)*20,noise(bcol)*25)
bezier(x1,y1,x2,y2,x3,y3,x4,y4);

offset = offset + 0.01

//yellow bezier/////
x1 = noise(offset)*width;
y1 = noise(offset + 4)*height;
x2 = noise(offset + 1)*width;
y2 = noise(offset + 5)*height;
x3 = noise(offset + 2)*width;
y3 = noise(offset + 6)*height;
x4 = noise(offset + 3)*width;
y4 = noise(offset + 7)*height;



rcol += 0.1;
gcol += 0.1;
bcol += 0.1;

//fill(noise(rcol)*255,noise(gcol)*255,noise(bcol)*0,)
stroke(noise(rcol)*255,noise(gcol)*255,noise(bcol)*0)
bezier(x1,y1,x2,y2,x3,y3,x4,y4);

offset = offset + 0.01


}
