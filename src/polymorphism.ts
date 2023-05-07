class Father {
    showInfo() : void {
        console.log("father")
    }
}

class Son1 extends Father {
    showInfo() : void {
        console.log("Son1")
    }
}
class Son2 extends Father {
    showInfo() : void {
           console.log("Son2")
    }
}


function show(param : Father){
    param.showInfo();
}


const xx = new Father();
const y = new Son1();
const z = new Son2();
show(xx);
show(y);

class Shape {
    getArea() {

    }
}
class Circle extends Shape {
     radius : number;
    constructor(radius : number) {
        super();
        this.radius = radius;
    }
    getArea(): number {
        return Math.PI + this.radius + this.radius;
    }
}


//Area of a Rectangle. A = l × b. 
class Retangle extends Shape {
    height : number;
    width : number;

    constructor(height : number, width : number) {
        super();

        this.height = height;
        this.width = width;

    }
    getArea(): number {
        return this.width * this.height;
    }
}

function getAreaShape (shape : Shape) {
    shape.getArea();
}
const area1 = new Shape();
getAreaShape(area1);