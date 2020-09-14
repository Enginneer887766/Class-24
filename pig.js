class Pig {

    constructor(x,y) {
var options ={
    'restitution':0.8,
    'friction':0.3,
    'density':1.0

}

this.body = Bodies.rectangle(x,y,50,50,options);
 
World.add(world,this.body);


    }

    display() {
        
        var pos = this.body.position;
        push();
        translate(pos.x,pos.y);
        fill("green");
        rectMode(CENTER);
        rect(0,0,this.width,this.height);
        pop();
    }

}