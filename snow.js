class Snows{
    constructor(x,y){
        var options={
        'restitution' : 0.1,
        'friction' : 0.1
    }

    this.body = Bodies.circle(x,y,5,options);
    this.radius = 5;
    World.add(world,this.body);
}

update(){
    if(this.body.position.y > height){
        Matter.Body.setPosition(this.body, {x:random(0,400), y:random(0,400)})
    }
}

display(){
    fill("blue");
    ellipseMode(RADIUS);
    ellipse(this.body.position.x, this.body.position.y, 5, 5);
  }
}