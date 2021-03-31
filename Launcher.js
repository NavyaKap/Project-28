class Launcher {
    constructor(b1,pointB){
 var options={
     bodyA:b1,
     pointB:pointB,
     stiffness:0.04,
     length:10
 }
 this.pointB=pointB
 this.bodyA = b1
 this.launcher=Constraint.create(options)
 World.add(world,this.launcher)
    }
    
    fly(){
       this.launcher.bodyA=null
    }
     attach(){
     this.launcher.bodyA = this.bodyA
    }

    display(){
    if(this.launcher.bodyA){
   var pointA= this.launcher.bodyA.position;
   var pointB= this.pointB;
   line(pointA.x,pointA.y,pointB.x,pointB.y)
    }
  } 
 }
