class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    Matter.Body.setMass(this.body,1500)
    var options={
      restitution:2.0
    }
    this.image = loadImage("sprites/ball.png");
  }

  display() {

    super.display();
  }

}
