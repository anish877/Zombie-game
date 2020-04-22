const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1;
var backgroundImg,platform;

function preload() {
    backgroundImg = loadImage("sprites/bg.png");
}

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);


    box1 = new Box(600,320,120,120);
    box2 = new Box(560,320,120,120);


    box3 = new Box(700,240,120,120);
    box4 = new Box(900,180,120,120);
    box6 = new Box(920,180,120,120);
    box9 = new Box(900,590,120,120);
    box7 = new Box(920,590,120,120);
    box8 = new Box(940,590,120,120);



    box5 = new Box(810,160,120,120);
    log4 = new Log(900,200,300,20, PI/2);
    log5 = new Log(600,350,300, 20,-PI/7);


    bird = new Bird(100,100);
     chain = new Chain(bird.body,{x:150,y:400});
}

function draw(){
    background(backgroundImg);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    ground.display();



    box3.display();
    box4.display();
    box9.display();
    box7.display();
    box8.display();


    box5.display();
    box6.display();
    log4.display();
    log5.display();

    bird.display();

    chain.display();
    
}
function mouseDragged(){
Matter.Body.setPosition(bird.body,{x:mouseX,y:mouseY})
}
function mouseReleased(){
chain.release();
}