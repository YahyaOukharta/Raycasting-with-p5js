class Map{
	constructor(grid,cellWidth,mapWidth,mapHeight){ //square map for now
		this.grid=grid;
		this.cw=cellWidth;
		this.w=mapWidth;
		this.h=mapHeight;
	}
	makeSquare(i,j,value){
		let square = [];
		square.push(new Boundary(i*this.cw, j*this.cw, i*this.cw+this.cw, j*this.cw,value));
		square.push(new Boundary(i*this.cw, j*this.cw, i*this.cw, j*this.cw+this.cw,value));
		square.push(new Boundary(i*this.cw+this.cw, j*this.cw, i*this.cw+this.cw, j*this.cw+this.cw,value));
		square.push(new Boundary(i*this.cw, j*this.cw+this.cw, i*this.cw+this.cw, j*this.cw+this.cw,value));
		return square;
	}
	generate(){
		let map = [];
		let gw = this.w / this.cw;
		console.log(gw);
		for(let j =0; j < gw; j++){
			for(let i =0; i < gw; i++){
				if(this.grid[j][i] != 0){
					let square = this.makeSquare(i,j,this.grid[j][i]);
					for(let wall of square)
						map.push(wall);
				}
			}
		}
		return map;
	}
}