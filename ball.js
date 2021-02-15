class Ball{
    constructor(x,y,radius){
       var options ={
           friction : 1.0,
           density : 0.5 
       }
       this.body = Bodies.circle(x,y,radius,options);
       this.radius = radius ;  
       World.add(world,this.body);
    }
    display(){
      var pos = this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x,pos.y);
      rotate(angle);
      ellipseMode(CENTER);
      strokeWeight(4);
      fill("yellow");
      ellipse(0,0,this.radius);
      pop();
      
    }
}