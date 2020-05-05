class Box extends BaseClass {
  constructor(x, y, width, height){
    super(x,y,width,height);
    Matter.Body.setMass(this.body,2500)
    this.image = loadImage("sprites/a.png");
  }
  display(){
    if(this.body){
  if(this.body.speed<5 ){
super.display()}
else
{
  World.remove(world,this.body)
  this.body = null
}
    
  }
}
scores(){
  if(this.body === null)
  {
    score = score + 50
    this.body = undefined
  }
}
};
