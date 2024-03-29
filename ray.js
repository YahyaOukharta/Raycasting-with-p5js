class Ray{
	constructor(pos,heading){
		this.pos = pos;
		this.heading = heading;
		this.dir = p5.Vector.fromAngle(this.heading);

	}
	update(){
		this.dir = p5.Vector.fromAngle(this.heading);
	}
	show(){
		const mag = 20;
		push();
			translate(this.pos.x,this.pos.y);
			stroke(255);
			line(0,0,this.dir.x*mag,this.dir.y*mag);
		pop();
	}

	cast(wall){
		const x1 = wall.a.x;
		const y1 = wall.a.y;
		const x2 = wall.b.x;
		const y2 = wall.b.y;


		const x3 = this.pos.x;
		const y3 = this.pos.y;
		const x4 = this.pos.x+this.dir.x;
		const y4 = this.pos.y+this.dir.y;

		const den = (x1-x2)*(y3-y4)-((y1-y2)*(x3-x4));
		if(den === 0)
			return;

		const t = ((x1-x3)*(y3-y4)-(y1-y3)*(x3-x4))/den;

		const u = -((x1-x2)*(y1-y3)-(y1-y2)*(x1-x3))/den;

		if(t>0 && t<1 && u > 0){
			const x = x1 + t*(x2-x1);
			const y = y1 + t*(y2-y1);
			const pt = createVector(x,y);
			return pt;
		}
		else
			return;

	}
}