let offset=0.0
let rcol;
let bcol;
let gcol;

function setup() {
    createCanvas(windowWidth, windowHeight);
    background(121,167,247);
  //  noStroke();
    noLoop();
}


function draw() {
  // varied square sizes across the whole page.///

    let n;
  for (let y = 0; y < height; y += 30) {
    for (let x = 0; x < width; x += 30) {

  n = noise(x);
  let diameter = n * 40;

rcol = random(0,20)
gcol = random(0,255)
bcol =random(0,255)

fill(rcol, gcol, bcol)
rect(x, y, diameter, diameter);
 }
}




}
