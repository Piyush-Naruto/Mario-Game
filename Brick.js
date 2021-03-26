class Brick {
    constructor(x, y, width, height) {
      var options = 
      {
        isStatic : true
      }
      this.body = Bodies.rectangle(x, y, width, height,options);
      this.width = width;
      this.height = height;
      this.image = loadImage("brick.png");

      World.add(world, this.body);
    }
    display(){
      push();
      var angle = this.body.angle;
      var position = this.body.position;
      translate(position.x,position.y);
      rotate(angle);
      image(this.image, 0, 0, this.width, this.height);
      pop();
    }
};