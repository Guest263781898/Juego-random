class Box{
    constructor(x,y,w,h){
       var options = {
        restitution: 0.8,
        friction: 0.5,
        density: 0.04
       }
       this.visiblity = 225;
       this.body = Bodies.rectangle(x, y, w, h, options);
       this.w = w;
       this.h = h;
       World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        if(this.body.speed < 11){
            push();
            rectMode(CENTER);
            stroke(490);
            fill(130);
            rect(pos.x, pos.y, this.w, this.h);
            pop();
        }
        else{
            World.remove(world, this.body);
            push();
            this.visiblity = this. visiblity - 5;
            tint(255, this.visiblity);
            rect(this.body.position.x, this.body.position.y, this.width, this.height);
            pop();
            if(this.visiblity <= 0){
                this.win();//creo que otra condicion, que detectara si los bloques han desaparecido todos 
                
            }
        }
    }

    win(){
        swal({
            title: "GRAN TRABAJO!!!",
            text: "Te necesitan en otro lado",
            button: "OK"
        });
    }
}