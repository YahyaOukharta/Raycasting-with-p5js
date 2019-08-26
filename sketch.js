let walls =[];
let particle;
let sceneW = 600;
let sceneH = 500;
let scene;
let data;
function setup(){
	createCanvas(sceneW,sceneH);
	for(let i = 0 ; i<5; i++){
		walls.push(new Boundary(random(sceneW),random(sceneH),random(sceneW),random(sceneH)));
	}
		walls.push(new Boundary(0,0,width,0));
		walls.push(new Boundary(0,0,0,height));
		walls.push(new Boundary(width,height,width,0));
		walls.push(new Boundary(width,height,0,height));
	particle = new Particle(sceneW/2,sceneH/2,0);

	scene = new Scene(sceneW,sceneH , particle.rays.length);
}

function draw(){
	background(0);
	if(data){
		scene.scene = data;
		scene.render(particle);
	}

	push();
		scale(0.3);

		fill(100,0,0);
		rect(0,0,sceneW,sceneH);

		strokeWeight(3);
		for(let wall of walls)
			wall.show();
		data = particle.run(walls);
	pop();

	userInput();

	
	
}

function userInput(){
	if(keyIsDown(LEFT_ARROW)){
		particle.rotate(-1);
	}
	else if(keyIsDown(RIGHT_ARROW)){
		particle.rotate(1);
	}
	if(keyIsDown(UP_ARROW)){
		particle.move(1);
	}
	else if(keyIsDown(DOWN_ARROW)){
		particle.move(-1);
	}
}



