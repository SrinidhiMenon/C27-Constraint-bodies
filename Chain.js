class Chain{
    constructor(body1,body2){
        var options = {
            length : 6,
            stiffness : 0.05,
            bodyA : body1,
            bodyB : body2
        }
        this.chain = Constraint.create(options)
        World.add(world,this.chain);
    }
display(){
    var posA = this.chain.bodyA.position;
    var posB = this.chain.bodyB.position;
    push ();
    strokeWeight(4);
    line (posA.x,posA.y,posB.x,posB.y);
    pop ();
}
}