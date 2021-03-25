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
    box= createSprite(random(20,750),100, 40,40);
    
    box.velocityX=4;
    box.velocityY=9;
    box.shapeColor="white";
}
   
    

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
    edges=createEdgeSprites();
    bounceoff(edges,box);
    
    if(isTouching(box,surface1) && bounceoff(surface1,box)){
        box.shapeColor = "blue";
        }

    if(isTouching(box,surface2) && bounceoff(surface2,box)){
        box.shapeColor = "yellow";
       }

    if(isTouching(box,surface3) && bounceoff(surface3,box)){
        box.shapeColor = "red";
    }

    if(isTouching(box,surface4) && bounceoff(surface4,box)){
        box.shapeColor = "green";
    }

    drawSprites();
}
  