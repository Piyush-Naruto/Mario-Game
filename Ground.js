class Ground {
    constructor(x, y, width, height) {
      this.body = Bodies.rectangle(x, y, width, height, options);
      var options = {
        isStatic : true
      }
      this.width = width;
      this.height = height;
      this.image = loadImage("ground.png");

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