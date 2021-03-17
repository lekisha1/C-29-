const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,40);
    stand1 = new Ground(500, 400, 250,20);
    stand2 = new Ground(900, 250, 250, 20);

    block1 = new Block(330, 235, 30, 40);












}

function draw(){
    background("yellow");
    Engine.update(engine);
    //strokeWeight(4);
    ground.display();  
    stand1.display();
    stand2.display();
    block1.display();
}