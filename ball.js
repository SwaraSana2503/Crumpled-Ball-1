class ball {
    constructor(x, y,radius) {
      var options = {
          isStatic:false,
          restitution:0.3,
          friction:0.5,
          density:1.2
      }
      this.x=x;
      this.y=y;
      this.r=radius
      this.body = Bodies.circle(this.x,this.y, this.r,options)
     

       World.add(world, this.body);


    }
display(){


     fill("deeppink")
    circle(this.body.position.x,this.body.position.y, this.r);


}



}