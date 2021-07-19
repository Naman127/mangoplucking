class Launcher{
    constructor(body,anchor){
    var options={
       bodyA: body,
       pointB: anchor,
       stiffness: 0.004,
       length: 5
    }
    this.bodyA=body;
    this.pointB=anchor;
    this.launcher=Constraint.create(options);
    World.add(world,this.launcher);
    }
    display(){
        if(this.launcher.bodyA){
        strokeWeight(2);
        var pos = this.bodyA.position;
        var pos2 = this.pointB;
        line(pos.x,pos.y,pos2.x,pos2.y);
        }
    }
    fly(){
        this.launcher.bodyA=null
        console.log(this.launcher.bodyA);
    }
    attach(body){
        this.launcher.bodyA=body;
    }
}