const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1;
var backgroundImg,platform;
var a = 0;
var score = 0;

function preload() {
    backgroundImg = loadImage("sprites/bg.png");
}

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    ground1 = new Ground(600,0,1200,20);
    ground2 = new Ground(1200,300,20,1200);
    ground3 = new Ground(0,300,20,1200);


    box1 = new Box(600,320,80,120);
    box2 = new Box(560,320,80,120);


    box3 = new Box(700,240,80,120);
    box4 = new Box(900,180,80,120);
    box6 = new Box(920,180,80,120);
    box9 = new Box(900,590,80,120);
    box7 = new Box(920,590,80,120);
    box8 = new Box(940,590,80,120);



    box5 = new Box(810,160,80,120);
    log4 = new Log(900,200,300,20, PI/2);
    log5 = new Log(600,350,300, 20,-PI/7);


    bird = new Bird(100,100);

    //console.log(box3.body.speed)
    //console.log(box2.body.speed)
     chain = new Chain(bird.body,{x:150,y:400});
}

function draw(){
    background(backgroundImg);
    Engine.update(engine);
    strokeWeight(5);
    stroke("black")
    textSize(32);
    fill(0,0,139)
    text("SCORE - " + score,280,50)
    box1.display();
    box1.scores();
    box2.display();
    box2.scores();
    ground.display();
    ground1.display();
    ground2.display();
    ground3.display();

    box3.display();
    box3.scores();
    box4.display();
    box4.scores();
    box9.display();
    box9.scores();
    box7.display();
    box7.scores();
    box8.display();
    box8.scores();

    box5.display();
    box5.scores();
    box6.display();
    box6.scores();
    log4.display();
    log5.display();
    bird.display();
    console.log(bird.body.mass);
    chain.display();


}
function mouseDragged(){
Matter.Body.setPosition(bird.body,{x:mouseX,y:mouseY})
}
function mouseReleased(){
chain.release();
}
function keyPressed(){
    if(keyCode===32)
    {
        chain.attach(bird.body);
    }
}