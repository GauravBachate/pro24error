class iron {
    constructor(x,y){
        var option = {
            ristitution : 0.8,
            density : 30,
            friction : 3
        }
        this.body = Bodies.rectangle(x,y,50,50,option)
        this.width = 50
        this.height = 50
        World.add(world,this.body)
    }
    display(){
        var pos = this.body.position
        pos.x = mouseX;
        pos.y = mouseY;
        var angle = this.body.angle;
    
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        strokeWeight(3);
        stroke('white')
        fill('orange')
        rectMode(CENTER)
        rect(0, 0, this.width, this.height);
        pop();
    }
}