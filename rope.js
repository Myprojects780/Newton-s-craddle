var con
var length_con
class Rope{
	constructor(body1,body2,pointA,pointB,length_con)
	{
		this.pointA=pointA
		this.pointB=pointB
		var options={
			bodyA:body1,
			bodyB:body2

		}
	//create rope constraint here
	 this.con=Matter.Constraint.create({
          
		bodyA:body1,
		pointA:{x:0,y:0},
		pointB:{x:0,y:0},
		bodyB:body2,
		length:length_con,
		stiffness:0.1
	  }); 
	  World.add(world,this.con)
	  
	}

    //create display() here 
display(){
	var pointA=this.con.bodyA.position
	var pointB=this.con.bodyB.position
	strokeWeight(1.5)
	line(pointA.x,pointA.y,pointB.x,pointB.y+100)
}
}
