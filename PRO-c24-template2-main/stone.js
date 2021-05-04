class stone {
    constructor (x,y,radius) {
        var option = {
           restitution : 0.8,
           friction : 0.9,
           density : 12
        }
        this.body = Bodies.circle(x,y,radius,option)
       this.radius = radius
        World.add(world, this.body)
    }
    display(){
        var angle = this.body.angle
        push ();
        translate(this,body.position.x, this.body.position.y)
        rotate (angle);
        ellipseMode (RADIUS)
        ellipse(0,0,this.radius,this.radius)
    pop()
       
    }
}