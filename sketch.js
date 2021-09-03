const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof;
var ball1
var rope1
var ball2
var rope2
var ball3
var rope3
var ball4
var ball5
var rope4
var rope5
//Create multiple bobs, mulitple ropes varibale here


function setup() {
	createCanvas(800, 600);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	var roof_options={
		isStatic:true			
	}

	roof = Bodies.rectangle(400,100,230,20,roof_options);
	ball3 = Bodies.circle(380,300,30,{
		restitution: 0.8
	  })
	  ball2 = Bodies.circle(320,300,30,{
		restitution: 0.8
	  })
	  ball4 = Bodies.circle(460,300,30,{
		restitution: 0.8
	  })
	  ball5 = Bodies.circle(500,300,30,{
		restitution: 0.8
	  })
	  ball1 = Bodies.circle(280,300,30,{
		restitution: 0.8
	  })
	  rope1=new Rope(roof,ball1,0,0,200)
	  rope2=new Rope(roof,ball2,0,0,210)
	  rope3=new Rope(roof,ball3,0,0,210)
	  rope4=new Rope(roof,ball4,0,0,230)
	  rope5=new Rope(roof,ball5,0,0,230)
	World.add(world,ball1)
    World.add(world,roof);
	World.add(world,ball2)

World.add(world,ball3)
World.add(world,ball4)
World.add(world,ball5)
	Engine.run(engine);
	
  
}

function draw() {
  rectMode(CENTER);
  background("#99004d");
rope1.display()
  rect(roof.position.x,roof.position.y,230,20);
  ellipse(ball1.position.x,ball1.position.y+100,30)
  //call display() to show ropes here
  ellipse(ball2.position.x,ball2.position.y+100,30)
  
  ellipse(ball3.position.x,ball3.position.y+100,30)
  //create ellipse shape for multiple bobs here
  ellipse(ball4.position.x,ball4.position.y+100,30)
  ellipse(ball5.position.x,ball5.position.y+100,30)

  rope2.display()
  rope3.display()
  rope4.display()
  rope5.display()
  
}

//Write keyPressed function and apply force on pressing up_arrow key on the first bob.
function Rightforce(bob){
	Matter.Body.applyForce(bob,{x:0,y:0},{x:0.15,y:-0.05});
}
function Leftforce(bob){
	Matter.Body.applyForce(bob,{x:0,y:0},{x:-0.15,y:-0.05});
}
function keyPressed(){
	if ((keyCode==RIGHT_ARROW)/*&&(keyCode==RIGHT_ARROW)*/){
		console.log("hello")
		Rightforce(ball5)
	  }
	  if ((keyCode==LEFT_ARROW)/*&&(keyCode==RIGHT_ARROW)*/){
		console.log("hello")
		Leftforce(ball1)
	  }
	 /* if ((keyCode=="1") &&(keyCode==LEFT_ARROW)){
		Leftforce(ball5)
	  }*/
}