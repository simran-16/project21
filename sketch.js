var canvas;
var music;
var surface1,surface2,surface3,surface4;
var box, edges;

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
    var box= createSprite(random(20,750),100, 40,40);
    box.x= Math.round(20,750);
    box.velocityX=4;
    box.velocityY=9;
    box.shapeColor="white";
}
   
    

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
    edges=  createEdgeSprites();
    box.bounceoff(edges);
    
    if(surface1.isTouching(box) && box.bounceoff(surface1)){
        box.shapeColor = "blue";
        }

    if(surface2.isTouching(box) && box.bounceoff(surface2)){
        box.shapeColor = "yellow";
       }

    if(surface3.isTouching(box) && box.bounceoff(surface3)){
        box.shapeColor = "red";
    }

    if(surface4.isTouching(box) && box.bounceoff(surface4)){
        box.shapeColor = "green";
    }

    drawSprites();
}
  