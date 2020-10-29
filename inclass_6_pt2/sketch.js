
let img;
let sam;

function preload(){
  img= loadImage('https://i.imgur.com/6x2kjJi.jpg');
  img2= loadImage('https://i.imgur.com/6x2kjJi.jpg');
  img3= loadImage('https://i.imgur.com/6x2kjJi.jpg');
  img4= loadImage('https://i.imgur.com/6x2kjJi.jpg');
}

function setup() {
  // put setup code here
createCanvas(windowWidth, windowHeight);
background(20,20,20)

//}

//function draw(){
  //img.loadPixels()
  //img2.loadPixels()
  //img3.loadPixels()
  //img4.loadPixels()
//start img #1//////////////////////////////////////////////
//img(){

tint(29,29,29)
   image(img, 0,0,400,300)
//start img #2//////////////////////////////////////////////

    tint(255,0,0)
      image(img2, 450 ,0,400,300)

//start img #3//////////////////////////////////////////////
 tint(255)
    image(img3, 0 ,350,400,300)

//start img #4//////////////////////////////////////////////

  //image(img4, 350, 500);
sam = img4.get( 0,0,400,300 )
image(sam, 450, 350)
}
