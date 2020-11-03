class plinko{
    constructor(x,y,radius){
       var options={
            isStatic:true
        }
    
       this.radius =10;
       this.body = Bodies.circle(x,y,this.radius,options);
        
        World.add(world,this.body);
    }
    display(){
        var plinkopos=this.body.position;
			push()
			translate(plinkopos.x, plinkopos.y);
		

            fill("white");
            circle(0,0,this.radius,this.radius);
		pop();
			
    }
}