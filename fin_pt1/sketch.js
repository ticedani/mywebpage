let sound
let offset=0.0
let rcol;
let bcol;
let gcol;


function preload(){
sound = loadSound('https://ticedani.github.io/mywebpage/fin_pt1/nature.wav')
}


function setup(){
  createCanvas(800,800);
 background(67,62,79)

//Stars////////////////
noStroke()
  frameRate(2)
  let n;
  for (let y = 0; y < height; y += 30) {
  for (let x = 0; x < width; x += 30) {

  n = noise(x);
  let diameter = n * 10;

  rcol = random(222,255)
  gcol = random(222,255)
  bcol =random(0,247)

  fill(rcol, gcol, bcol)
  circle(x, y, diameter);
  }
  }

  //moon
  fill(168,143,176)
  circle(400,550,400)
  fill(209,193,214)
  circle(400,550,375)
  fill(255)
  circle(400,550,325)

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

///////Tree making///////////////////////////
function branch(depth){
  //frameRate(0.1)
  if (depth < 10) {
    line(0,0,0,-height/10);
    {
      translate(0,-height/10);
      rotate(random(-0.05,0.05));

      if (random(1) < 0.6){
        rotate(0.4);
        scale(0.8);

        push();
        branch(depth + 0.5);
        pop();

        rotate(-0.65);

        push();
        branch(depth + 0.25);
        pop();
     }
    }
  }
}
function draw(){
/////// ground - front
  push()
  noStroke()
  fill(14,0,23)
  rect(0,600,800,800);
  pop()
//tree branches /////
push()
  stroke(51,18,33)
  strokeWeight(15);
  translate(width/2,height-200);
  branch(0);
pop()


}
