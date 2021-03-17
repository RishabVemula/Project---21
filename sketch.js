var canvas;
var music;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
surface1 = createSprite(100,550,190,30)
surface1.shapeColor = ("green")
surface2 = createSprite(300,550,190,30)
surface2.shapeColor = ("magenta")
surface3 = createSprite(500,550,190,30)
surface3.shapeColor = ("orange")
surface4 = createSprite(700,550,190,30)
surface4.shapeColor = ("blue")

    //create box sprite and give velocity
    box = createSprite(random(20,750), 300, 30, 30)
    box.shapeColor = ("white")
    box.velocityY = 5
    
}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
    edges = createEdgeSprites();

    surface1.display()
    surface2.display()
    surface3.display()
    surface4.display()

    box.display()


    box.bounceOff(edges)
    

    //add condition to check if box touching surface and make it box

if(surface1.isTouching(box) && box.bounceOff(surface1))
    { box.shapeColor =("green"); }

if(surface2.isTouching(box) && box.bounceOff(surface2))
    { box.shapeColor =("magenta"); }

if(surface3.isTouching(box) && box.bounceOff(surface3))
    { box.shapeColor =("orange"); }

if(surface4.isTouching(box) && box.bounceOff(surface4))
    { box.shapeColor = ("blue"); }
}
