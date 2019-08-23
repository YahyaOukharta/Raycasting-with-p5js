let walls =[];
let particle;

function setup(){
	createCanvas(500,500);
	for(let i = 0 ; i<5; i++){
		walls.push(new Boundary(random(width),random(height),random(width),random(height)));
	}
	particle = new Particle(width/2,height/2);
}

function draw(){
	background(0);
	
	for(let wall of walls)
		wall.show();
	
	particle.show();
	particle.update(mouseX,mouseY);
	particle.look(walls);
}
