let catList=[];
let dogList=[];

let cxposList=[];
let dxposList=[];
let yposList=[];

let yspeedList=[];
let sizeList=[];
//number of cats and dog
let numcat = 10;
let numdog = 10;

function preload(){

  for( let i = 0; i < numcat ; i = i + 1){
  catList[i] = loadImage('https://i.imgur.com/XyFEmtx.png');
}
for( let i = 0; i < numdog ; i = i + 1){
  dogList[i] = loadImage('https://i.imgur.com/WYUFp85.png');
}
}
function setup() {
  // put setup code here
createCanvas(windowWidth, windowHeight);

for (let i=0 ; i< numcat; i = i+ 1){
  cxposList[i]=random(0,windowWidth);
  yposList[i]=random(0,windowHeight);
  yspeedList[i]= random (1,10);
  sizeList[i]=(20,200)
}


for (let i=0 ; i< numdog; i = i+ 1){
  dxposList[i]=random(0,windowWidth);
  yposList[i]=random(0,windowHeight);
  yspeedList[i]= random (1,.5);
  sizeList[i]=(10,100)
}

}

function draw() {
  //Put draw code here
  //frameRate(3)
  rcol=random(0,200)
  gcol=random(0,200)
  bcol=random(0,200)
background(rcol,gcol,bcol)

imageMode(CENTER)

for (let i=0; i < numcat; i= i+1){

image(catList[i], cxposList[i],yposList[i],sizeList[i],sizeList[i])
yposList[i]= yposList[i]+ yspeedList[i]


for (let i=0; i < numdog; i= i+1){

image(dogList[i], dxposList[i],yposList[i],sizeList[i],sizeList[i])
yposList[i]= yposList[i] + yspeedList[i]


  if(yposList[i]>height){
  yposList[i]= 0
  }
}
}
}
