const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine,world;
var box1,box2,box3,box4,box5;
var ground;
var pig1,pig2;
var log1,log2,log3,log4,log5;
var bird;
var bg;
var constraintLog;
var slingshot;
var platform;


function setup(){
  var canvas = createCanvas(1200,400);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(600,height,1200,20); 
  platform = new Ground(150,305,300,170);
  
  //log5 = new Log(230,180,60,80,PI/2);

  bg = loadImage("bg.png");
  
  box1 = new Box(700,320,70,70);
  box2 = new Box(920,320,70,70);
  pig1 = new Pig(810,350);  
  log1 = new Log(810,260,300,PI/2);
  
  box3 = new Box(700,240,70,70);
  box4 = new Box(920,240,70,70);
  pig2 = new Pig(810,220);  
  log2 = new Log(810,180,300,PI/2);
  
  box5 = new Box(810,160,70,70);
  log4 = new Log(760,120,150,PI/7);
  log3 = new Log(870,120,150,-PI/8);
  
  bird = new Bird(200,50);

  slingshot = new Sling(bird.body,{x:200,y:50});
  
}
function draw(){
  background(bg);
  Engine.update(engine);
  
  box1.display();
  box2.display();
  ground.display();
  pig1.display();
  log1.display();
  
  box3.display();
  box4.display();
  pig2.display();
  log2.display();
  
  box5.display();
  log3.display();
  log4.display();
  

platform.display();

  bird.display();
  //log5.display();
  slingshot.display();
}

function mouseDragged(){

  Matter.Body.setPosition(bird.body,{x: mouseX,y: mouseY});
}

function mouseReleased(){
 slingshot.fly();
}
