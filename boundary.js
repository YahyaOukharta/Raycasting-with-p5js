class Boundary{
	constructor(x1,y1,x2,y2,value){
		this.a = createVector(x1,y1);
		this.b = createVector(x2,y2);
		this.color;
 		switch(value)
      	{
	        case 1:  this.color = 255;  break; //red
	        case 2:  this.color = 90;  break; //green
	        case 3:  this.color = 180;   break; //blue
	        case 4:  this.color = 20;   break; //blue
	       	case 5:  this.color = 79;   break; //blue

      	}
    }

	show(){
		stroke(this.color);
		line(this.a.x,this.a.y,this.b.x,this.b.y);
	}
}