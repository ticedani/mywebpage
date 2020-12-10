let sound;
let xpos;
let xposn = 0.1
let xposn1 = 0.3
let xposn2 = 0.5
let xposn3 = 0.7

let offset = 0.0
let offset1 = 0.005
let offset2 = 0.1
let offset3 = 0.9


function preload(){
sound = loadSound('https://ticedani.github.io/mywebpage/fin_pt2/city.wav')
}



function setup() {
  // put setup code here
createCanvas(800,800);
frameRate(10)


}
//////Create Sound//////////////////////////////////////////////////
function mousePressed(){

if(sound.isPlaying()){
  sound.pause();
}
else{
  sound.play();
}
}

////////////////////////////////////////////////////////
function draw(){
background(185,0,0);
//(255,105,157)
noStroke()
//right building
fill(142,173,203);
  quad(700, 50, 800, 55, 800, 575, 700, 575);

fill(61,93,128);
  quad(625,100,700,50,700,575,625,575);

//left set buildings
fill(54,89,120);
  quad(50,60,115,50,115,575,50,575);
fill(65,84,103);
  quad(120,35,200,25,200,575,120,575);

fill(138,165,195);
    quad(200,25,310,35,310,575,200,575);

fill(170,199,215);
  quad(0,70,100,80,100,575,0,575);

fill(165,185,211);
  quad(115,50,210,60,210,575,115,575);

//2nd to right building
fill(60,89,116);
  quad(450,210,550,190,550,575,450,575);

  fill(165,204,234);
    quad(550,190,600,225,600,575,550,575);

    fill(54,74,92);
      quad(600,350,650,370,650,575,600,575);
//middle building
fill(54,89,120);
  quad(300,110,390,85,390,350,300,350);

  fill(151,181,188);
    quad(390,85,450,100,450,390,390,350);

    fill(54,74,92);
      quad(290,350,390,325,390,575,290,575);

      fill(136,167,196);
        quad(390,325,460,340,460,575,390,575);
///BOTTOM////////////////////////////////////////////////////////////////////////


//Cars///////////////////////////

for(let i = 0; i< 10 ; i = i + 1){
fill(0,0,190,100);
xposn = noise(offset)* 1000;
rect(xposn, 550, 50, 30)
offset = offset + 0.05
}

for(let i = 0; i<10 ; i = i + 1){
fill(200,0,0,100);
xposn1 = noise(offset1)* 1000;
rect(xposn1, 550, 50, 30)
offset1 = offset1 + 0.002
}

for(let i = 0; i<10 ; i = i + 1){
fill(200,0,200,100);
xposn2 = noise(offset2)* 1000;
rect(xposn2, 550, 50, 30)
offset2 = offset2 + 0.8
}

for(let i = 0; i<10 ; i = i + 1){
fill(200,200,0,100);
xposn3 = noise(offset3)* 1000;
rect(xposn3, 550, 50, 30)
offset3 = offset3 + 0.7
}
//////////////bridge///////////////
fill(255,20,83)
  rect(0,575,800,25);

  fill(110,0,6)
    rect(0,600,800,200);

///water @ bottom//////////////////////////////////////
stroke(32,66,62)
for (let x = 0; x < 800; x = x + 1) {
  let lineh = height - noise(offset) * 100
  line(x, 800, x, lineh);
  offset = offset + 0.0001
    }

///////////arcs on bridge///////////

noStroke()
fill(0,0,0,150);
  circle(150,800,200)

fill(0,0,0,150);
 circle(400,800,200)

fill(0,0,0,150);
  circle(650,800,200)


}
