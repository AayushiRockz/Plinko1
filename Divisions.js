class Divisions {
    constructor(x,y,width,height) {
      var options = {
          isStatic: true
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width =10;
      this.height =140;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      fill("white");
      push();
      rectMode(CENTER);

      rect(pos.x, pos.y, this.width, this.height);
      

      pop();
    }
  };
