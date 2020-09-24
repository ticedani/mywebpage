
function setup() {
  // in class #3
createCanvas(windowWidth, windowHeight);
background(75,0,200);

for(let i = 0; i < width; i = i +20){
  for(let h = 0; h < height; h = h +35)
  rect(i,h,20);
  }

}

function draw() {

  for(let i = 0; i < height; i = i +4){
    let xlength = random(0,width);
    let rcol= random(0,255)
    let gcol= random(0,255)
    let bcol= random(0,255)
    stroke(255,gcol,bcol)
    line(0,i,xlength,i);
  }

}
