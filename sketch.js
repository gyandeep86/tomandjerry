var cat,catl,catw,ctas;
var rat,ratc,ratd,ratf;
var groundImg;

function preload() {
    //load the images here
    catl = loadImage( "cat1.png" );
    catw = loadAnimation("cat2.png","cat3.png");
    ctas = loadImage("cat4.png");

    ratc = loadImage("mouse1.png");
    ratd = loadAnimation("mouse2.png","mouse3.png");
    ratf = loadImage("mouse4.png");

    groundImg = loadImage("garden.png")
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here

}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here


}
