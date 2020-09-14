const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground, platform;

var box1;
var box2;
var log1;

var box3;
var box4;

var pig1;


var pig2;


var bird;


function setup(){
    var canvas = createCanvas(1000,600);
    engine = Engine.create();
    world = engine.world;
    ground = new Ground(500,600,1000,20);
    platform = new Ground(150,300)


    box1 = new Box(900,400,50,50);
    box2 = new Box(700,400,50,50);
    pig1 = new Pig(800,400,0,0);
    log1 = new Log(800,300,250,20,PI/2);
   

    box3 = new Box(900,200,50,50);
    box4 = new Box(700,200,50,50);
    pig2 = new Pig(800,200,0,0);
    

    box5 = new Box(800,100,50,50);
   


    bird = new Bird(200,500)
    

}

function draw(){
    background(0);
    Engine.update(engine);
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    log1.display();
    
    pig2.display();
    
    box3.display();
    box4.display();
    box5.display();
    
    bird.display();
    
}