class Particle{
	constructor(x,y,heading){
		this.pos=createVector(x,y);
		this.fov = 45;
		this.heading = heading;
		this.rays=[];
		for(let i = -this.fov/2; i < this.fov/2; i += 1){
			this.rays.push(new Ray(this.pos,radians(i)+ this.heading));
		}
	}
	//mainfunction
	run(walls){
		this.show();
		this.update();
		return this.look(walls);
	}
	rotate(dir){
		const rotVel = 0.05;
		this.heading += dir * rotVel;
		for(let ray of this.rays){
			ray.heading += dir *rotVel;
		}
	}
	move(dir){
		this.dir = p5.Vector.fromAngle(this.heading);
		this.pos.add(this.dir.mult(dir));
	}

	update(){
		for(let ray of this.rays){
			ray.update();
			ray.pos=this.pos.copy();
		}
	}
	show(){
		for(let ray of this.rays){
			ray.show();
		}
	}

	look(walls){
		let data = [];
		for(let ray of this.rays){
			let angle;
			let record = Infinity;
			let closest = null;
			let color = null;
			for(let wall of walls){
				const pt = ray.cast(wall);
				if(pt){
					const d = dist(this.pos.x,this.pos.y,pt.x,pt.y);
					if(d < record){
						record = d;
						closest = pt;
						color = wall.color;
					}
				}
			}
			if(closest){
				stroke(255,50,100);
				ellipse(closest.x,closest.y,5);
				line(this.pos.x,this.pos.y,closest.x,closest.y);
				angle = ray.heading-this.heading;
			}

			data.push({pt:closest,angle:angle,color:color});
			

		}
		//console.log(data);
		return data;  //returns data for rendering the scene wolfenstein style

	}
}