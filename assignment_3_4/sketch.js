

let xpos;
let ypos;
let rcol;
let gcol;
let bcol;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(15);
  frameRate(15)
  xpos = 0;
  ypos = 0.5;
  rcol = 1;
  gcol = 2;
  bcol = 3;
}



function draw() {

//blendMode(ADD)
  xpos = xpos + 0.01;
  let n = noise(xpos) * width;
  line(n, 0, n, height)


  stroke(noise(rcol)*255,noise(gcol)*255,noise(bcol)*255)

  xpos += 0.005;
  ypos += 0.005;
  rcol += 0.01;
  gcol += 0.01;
  bcol += 0.01;

  fill(0);
  rect(0,0, width,height/8);

  fill(0);
  rect(0, height/1.2 , width, height);

  xpos = xpos + 0.04;
  let p = noise(xpos) * width;
  line(p, 0, p, height)


  stroke(noise(rcol)*250,noise(gcol)*255,noise(bcol)*255)

  xpos += 0.005;
  ypos += 0.005;
  rcol += 0.01;
  gcol += 0.01;
  bcol += 0.01;

}
