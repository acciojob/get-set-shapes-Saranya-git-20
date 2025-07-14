//complete this code
class Rectangle {
	constructor(width,height){
		this.height=height;
		this.width = width;
	}
	width(){
		return this.width;
	}
	height(){
		return this.height;
	}

	getArea{
		return this.height * this.weight
	}
	
}

class Square extends Rectangle {
	constructor(side){
		this.side = side
		super(width,height)
	}
	getPerimeter(){
		return 4 * this.side
	}
}
const rectangle = new Rectangle(5, 10);
console.log(rectangle.width);
console.log(rectangle.height);
console.log(rectangle.getArea());

const square = new Square(7);
console.log(square.width); // Output: 7
console.log(square.height); // Output: 7
console.log(square.getArea()); // Output: 49
console.log(square.getPerimeter())

// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;
