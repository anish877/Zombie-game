class Chain{

constructor(bodyA,pointB){
var options={
bodyA:bodyA,
pointB:pointB,
stiffness : 0.08,
length : 10

}
this.chain1 = loadImage("sprites/sling1.png")
this.chain2 = loadImage("sprites/sling2.png")
this.chain3 = loadImage("sprites/sling3.png")
this.pointB = pointB
this.chain = Constraint.create(options)
World.add(world,this.chain)

}

display()
{
 image(this.chain1,155,390)
 image(this.chain2,125,386)

    if(this.chain.bodyA){
var pointA = this.chain.bodyA.position
var pointB = this.pointB
push()
stroke(48,22,8)

if(pointA.x < 250) {
    strokeWeight(7)
line(pointA.x - 20, pointA.y, pointB.x + 30, pointB.y - 3);
line(pointA.x - 20, pointA.y, pointB.x -10, pointB.y);
image(this.chain3,pointA.x -30, pointA.y -10,15,30);}
else{
    strokeWeight(3);
    line(pointA.x + 25, pointA.y, pointB.x -10, pointB.y);
    line(pointA.x + 25, pointA.y, pointB.x + 30, pointB.y - 3);
    image(this.chain3,pointA.x + 25, pointA.y -10,15,30);
}
    }

}


release(){
    this.chain.bodyA = null
}




}