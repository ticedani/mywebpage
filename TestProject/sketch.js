
let xpos=0
let ypos=0
function setup() {
  // put setup code here
createCanvas(750,750);
background(0,100,201);

}



function draw() {
  // put drawing code he

noStroke()
fill(50)
triangle(250,375,150,50,350,375);

noStroke()
fill(70)
ellipse(350,400,220,300);

noStroke()
fill(70)
ellipse(350,200,190,190);

noStroke()
fill(85)
triangle(375,310,420,475,650,100);

noStroke()
fill(70)
triangle(200, 275, 258, 220, 300, 275);

fill(200)
circle(325,200,30);

circle(mouseX,mouseY,50)


}
