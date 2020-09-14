class Log {

    constructor(x,y,width,height,angle) {
var options ={
    'restitution':0.5,
    'friction':1.0,
    'density':1.0

}

this.body = Bodies.rectangle(x,y,width,height,angle,options);
this.width = width;
this.height = height; 
Matter.Body.setAngle(this.body,angle);
World.add(world,this.body);


    }

    display() {
        
        var pos = this.body.position;
        var angle;
        angle = this.body.angle;
        push();
        translate(pos.x,pos.y);
        fill("brown");
       
        rotate(angle);
        rectMode(CENTER);
        rect(0,0,this.width,this.height,this.angle);
        pop();
    }

}