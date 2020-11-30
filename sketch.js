const Engine = Matter.Engine;
const World=   Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
var ground1,ground2,ground3;
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14,box15,box16,box17,box18;
var polygon;
var score = 0;
var world,engine;
var slingshot;
function setup() {
  createCanvas(1600,800);
  engine=Engine.create();
  world=engine.world;
  polygon = new Polygon(100,100,50);

 
  slingshot = new Slingshot(polygon.body,{x:200,y:150});

  ground1 = new Ground(0,770,1200,20);
  ground2 = new Ground(600,400,200,20);
  ground3 = new Ground(1200,600,200,20); 
  box1 =  new Box (580,270,30,40);
  box2 =  new Box (620,270,30,40);
  box3 =  new Box (660,270,30,40);
  box4 =  new Box (620,270,30,40);
  box5 =  new Box (660,270,30,40);

  box6 = new Box (700,230,30,40);
  box7 = new Box (700,230,30,40);
  box8 = new Box (700,230,30,40);

  box9 = new Box (700,190,30,40);


  box10 = new Box (160,170,30,40);
  box11 = new Box (140,170,30,40);
  box12 = new Box (120,170,30,40);
  box13 = new Box (100,170,30,40);
  box14 = new Box (90,170,30,40);

  box15 = new Box (140,210,30,40);
  box16 = new Box (120,210,30,40);
  box17 = new Box (100,210,30,40);

  box18 = new Box (120,250,30,40);



}

function draw() {

  background(255,255,255);
  Engine.update(engine);
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();
  box17.display();
  box18.display();
  polygon.display();
  ground1.display();  
  ground2.display();
  ground3.display();
  slingshot.display();
  drawSprites();
}
function mouseDragged(){
  Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  slingshot.fly();
}
function keyPressed(){
  if(keyCode === 32){
     slingshot.attach(this.polygon);
  }
}