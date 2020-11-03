const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;


var engine,world;
var particles = [];
var plinkos = [];
var divisions = [];

var divisionHeight=300;

function setup() {
  createCanvas(480,800);
  engine = Engine.create();
  world = engine.world;


  // make ground 
   ground  = new Ground(240,735,480,30);
  

  



}

function draw() {
 
  background(0,0,0);  

  Engine.update(engine);
  ground.display();

 
  
  //   make particles
 if(frameCount % 60 ===0){
  particles.push(new Particle(random(width/2-10,width/2+10),10,10));
  
}

  // make divisions 
  for( var i = 0 ; i <= width; i = i + 80){
    divisions.push(new Divisions(i, height-divisionHeight/2,10, divisionHeight));
  }
  // display divisions
  for(var i=0; i<divisions.length; i++){
    divisions[i].display();
  }


// make plinkos
  for(var j =40; j <= width; j=j+50){
  plinkos.push(new plinko(j,75) );
  }

  for(var j =15; j <= width-10; j=j+50){
    plinkos.push(new plinko(j,175) );
    }
  
//  display plinkos
 for(var j= 0; j<width; j++){
 plinkos[j].display();
 }




}

