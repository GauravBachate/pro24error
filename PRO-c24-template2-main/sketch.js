const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var stone2,iron2
var rubber
var engine, world;
var hammer;


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(10,100);
    rubber = new Rubber(900,500,70)
 stone2 = new stone(700,320,100,100)
  iron2 = new  iron(500,430,50,50)


}

function draw(){
    background("lightBlue");
    Engine.update(engine);


    plane.display();
    hammer.display();
    rubber.display();
    stone2.display();
    iron2.display();
    
 
}