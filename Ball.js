class Ball{
    constructor(x, y){
      var options = {
        'restituition' : 0.6,
        'density' : 5.0,
        'friction' : 0.5,
        'isStatic' : false
      }
      this.body = Bodies.circle(x, y, 30, options);
      World.add(world, this.body);
    }
    display(){
      push();
      translate(this.body.position.x, this.body.position.y);
      ellipseMode(RADIUS);
      fill("#960A04")
      stroke("#960A04")
      ellipse(0, 0, 30, 30);
      pop();
    }
  }