
let xposList = [100,500,20,400,700,250,1000]
let yposList = [400,600,89,457,609,976,98]
let xspeedList = [20,5,10,8,9,30,17]
let yspeedList = [20,5,10,8,9,30,17]

function setup() {
  // put setup code here
createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(255);

fill(mouseX, mouseY,200);
//for loop///////////////
for (let i = 0; i < xposList.length ; i = i + 1 ){

//up and down circles//////////////////////////////
circle(xposList[i], yposList[i], 50);
yposList[i] = yposList[i] + yspeedList[i];
xposList[i] = xposList[i] + xspeedList[i];
//check for bottom hit//
  if (yposList[i] > height){
    yspeedList[i]= -yspeedList[i]
  }

  //check for top hit//
if (yposList[i] < 0){
  yspeedList[i]= - yspeedList[i];
}


//check for right hit////
if(xposList[i] > width){
xspeedList[i] = - xspeedList[i]
}

//check for left hit//
if (xposList[i] < 0){
  xspeedList[i] = -xspeedList[i];
}
}
}
