class Box extends BaseClass {
  constructor(x, y, width, height){
    super(x,y,width,height);
    Matter.Body.setMass(this.body,220)
    this.image = loadImage("sprites/a.png");
  }

};
