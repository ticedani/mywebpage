let back;
let bee1;
let bee2;
let bee3;
let flo1;
let flo2;
let flo3;
let mouse
let x = 0
let a = 0
let b = 0
let c = 0
let d = 0
let e = 0
let f = 0

function preload(){
  back= loadImage('https://i.imgur.com/h7IFgMe.png');
  bee1= loadImage('https://i.imgur.com/BjlIRI9.png');
  bee2= loadImage('https://i.imgur.com/v2eDh2T.png');
  bee3= loadImage('https://i.imgur.com/HKhkjpr.png');
  flo1= loadImage('https://i.imgur.com/WWzzDvU.png');
  flo2= loadImage('https://i.imgur.com/2hotBK5.png');
  flo3= loadImage('https://i.imgur.com/SwJ7yEW.png');
}
function setup() {
createCanvas(windowWidth, windowHeight);
background(back);

}

function draw() {
  tint(255)
  angleMode(DEGREES);


background(back);

//bee moving with mouse

push()
imageMode(CENTER)

x = int(random(1,4))
//console.log(x)
 if (x === 1){

image(bee1,mouseX,mouseY);

 }
 if (x === 2){

image(bee2,mouseX,mouseY);

 }
 if (x === 3) {
image(bee3,mouseX,mouseY)
}

pop()

//Flower #1//\/\/\/\//\/\//\/\/\/\/\/\/
push()
imageMode(CENTER);
tint(255);

translate(width/1.5, height/1.5)
rotate(a);
image(flo1, 0, 0);
a = a -3.5;
pop();

// flower #2///////////////\/\//\//\//\\/\/\/\/\/\/\\/\//\/\/\/\/\/\/
push();
imageMode(CENTER);
tint(255);

translate(width/2.5, height/1.4)
rotate(b);
image(flo2,0,0 );
b = b + 2;
pop();

// flower #3///////////////\/\//\//\//\\/\/\/\/\/\/\\/\//\/\/\/\/\/\/
push();
imageMode(CENTER);
tint(255);

translate(width/3.5, height/1.12)
rotate(c);
image(flo3, 0,0);
c = c - 4;
pop();

// flower #4///////////////\/\//\//\//\\/\/\/\/\/\/\\/\//\/\/\/\/\/\/
push();
imageMode(CENTER);
tint(200,20,100);

translate(width/7.9, height/1.1)
rotate(d);
image(flo1, 0,0);
d = d + 5.5;
pop();

// flower #5///////////////\/\//\//\//\\/\/\/\/\/\/\\/\//\/\/\/\/\/\/
push();
imageMode(CENTER);
tint(255,30,100);

translate(width/1.2, height/1.2)
rotate(e);
image(flo2, 0,0);
e = e - 1.5;
pop();

// flower #6///////////////\/\//\//\//\\/\/\/\/\/\/\\/\//\/\/\/\/\/\/
push();
imageMode(CENTER);
tint(20,30,155);

translate(width/1.7, height/1.22)
rotate(f);
image(flo3, 0,0);
f = f + 1;
pop();


//console.log (mouseX,mouseY)
}
