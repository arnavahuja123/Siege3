class Box  {
   constructor(x, y, width, height){
     
     var options = {
       restitution :0.4,
       friction : 1.0,
       density : 1.0

     }
     this.body =Bodies.rectangle(x,y,width,height,options);
     this.height =height;
     this.width = width; 
     World.add(world,this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(this.body.positions.x,this.body.position.y);
      rotate(angle);
      fill("yellow");
      rectMode(CENTER);
        rect(0,0,this.width,this.height);
        

      
    }
   

  
  };
  