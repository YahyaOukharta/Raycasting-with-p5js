class Scene{
	constructor(w,h,n){
		this.w=w;
		this.h=h;
		this.n=n;

		this.scene = [];
		this.rw = this.w/this.n;
	}

	update(){
		//console.log(this.scene);
	}
	show(particle){

		for(let i = 0; i < this.n ; i++){
			let slice= this.scene[i];
			
			if(slice.pt){
				const coord = slice.pt;
				let d = dist(coord.x,coord.y,particle.pos.x,particle.pos.y);
				d *= cos(this.scene[i].angle);
				const diameter = dist(0,0,this.w,this.h);
				const offset = map(d,0,diameter,0,this.h/2);
				const c = map(d,0,diameter,255,-255);
				push();
					stroke(20);
					fill(slice.color,100,100,c);
					rect(i*this.rw,offset,this.rw+1,height-offset*2);
				pop();
			}
		}
	}
	render(particle){
		this.update();
		this.show(particle);
	}
}