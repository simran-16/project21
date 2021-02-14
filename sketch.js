var canvas;
var music;
var surface1,surface2,surface3,surface4;
var box;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    surface1= createSprite(40,600,200,30);
    surface1.shapeColor="blue";
    surface2= createSprite(260,600,200,30);
    surface2.shapeColor="yellow";
    surface3= createSprite(480,600,200,30);
    surface3.shapeColor="red";
    surface4= createSprite(700,600,200,30);
    surface4.shapeColor="green";

    //create box sprite and give velocity
    var box= createSprite(0,550,40,40);
    box.x= Math.round(20,550);
    box.velocityX=2;
    box.velocityY=2;
    box.shapeColor="white";
}
   
    

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
    createEdgeSprites();
    drawSprites();
    //add condition to check if box touching surface and make it box
    bounceoff(box,surface1);
    bounceoff(box,surface2);
    bounceoff(box,surface3);
    bounceoff(box,surface4);

    if(isTouching(box,surface1) && bounceoff(box,surface1)){
        box.shapeColor="blue";
    }
    else if(isTouching(box,surface2) && bounceoff(box,surface2)){
        box.shapeColor="yellow";
    }
    else if(isTouching(box,surface3) && bounceoff(box,surface3)){
        box.shapeColor="red";
    }
    else if(isTouching(box,surface4) && bounceoff(box,surface4)){
        box.shapeColor="green";
    }
    
  }