class Particle{
	constructor(x,y){
		this.pos=createVector(x,y);
		this.rays=[];
		for(let i = 0; i < 360 ; i += 5){
			this.rays.push(new Ray(this.pos,radians(i)));
		}
	}
	update(x,y){
		this.pos.x = x;
		this.pos.y = y;
	}
	show(){
		for(let ray of this.rays){
			ray.show();
		}
	}

	look(walls){
		for(let ray of this.rays){
			let record = Infinity;
			let closest = null;
			for(let wall of walls){
				const pt = ray.cast(wall);
				if(pt){
					const d = dist(this.pos.x,this.pos.y,pt.x,pt.y);
					if(d < record){
						record = d;
						closest = pt;
					}
				}
			}
			if(closest){
				stroke(255,50,100);
				ellipse(closest.x,closest.y,5);
				line(this.pos.x,this.pos.y,closest.x,closest.y);
			}
		}
	}
}