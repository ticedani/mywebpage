
let img;

function preload(){
  img= loadImage('https://i.imgur.com/6x2kjJi.jpg');
}

function setup() {
  // put setup code here
createCanvas(windowWidth, windowHeight);
background(20,20,20)

//}

//function draw(){
  img.loadPixels()
//start img #1//////////////////////////////////////////////
//img(){

for(let x=0; x< img.width; x=x+1){
  for(let y =0; y< img.height; y=y+1){
    let i= ( x+y * img.width) * 4;

  let pixr = img.pixels[i+0];
  let pixg = img.pixels[i+1];
  let pixb = img.pixels[i+2];
  let pixa = img.pixels[i+3];

if(pixg> 125)
  img.pixels[i+2]= 255;
}
}
  img.updatePixels();
   image(img, 0,0,400,300)
//start img #2//////////////////////////////////////////////

 for(let x=0; x< img.width; x=x+1){
   for(let y =0; y< img.height; y=y+1){
       let i= ( x+y * img.width) * 4;

     let pixr = img.pixels[i+0];
     let pixg = img.pixels[i+1];
     let pixb = img.pixels[i+2];
     let pixa = img.pixels[i+3];

   if(pixg> 125)
     img.pixels[i+0]= 255;

   }
   }
     img.updatePixels();
      image(img, 450 ,0,400,300)

//start img #3//////////////////////////////////////////////
 for(let x=0; x< img.width; x=x+1){
   for(let y =0; y< img.height; y=y+1){
     let i= ( x+y * img.width) * 4;

      let pixr = img.pixels[i+0];
      let pixg = img.pixels[i+1];
      let pixb = img.pixels[i+2];
      let pixa = img.pixels[i+3];

  let blackwhite;
    if(pixr > 150){
      blackwhite =255;
    }
    else{
      blackwhite = 0;
    }
    img.pixels[i+0] = blackwhite;
    img.pixels[i+1] = blackwhite;
    img.pixels[i+2] = blackwhite;

}
}
  img.updatePixels();
    image(img, 0 ,350,400,300)

  //start img #4//////////////////////////////////////////////
for(let x=0; x< img.width; x=x+10){
  for(let y =0; y < img.height; y=y+10){
    let i= ( x+y * img.width) * 4;

    let pixr = img.pixels[i+0];
    let pixg = img.pixels[i+1];
    let pixb = img.pixels[i+2];
    let pixa = img.pixels[i+3];

  fill(pixr,pixg,pixb,pixa)
  circle(x, y ,10 )

}
}
    img.updatePixels();
    //  image(img, 450 ,350,400,300)


}
