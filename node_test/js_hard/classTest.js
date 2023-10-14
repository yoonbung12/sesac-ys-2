class Shape {

    constructor(row, colum){ //가로, 세로(높이)
        this.row = row;
        this.colum = colum;
    };
    getArea(){
        return this.row * this.colum;
    };
}
let rec1 = new Shape(3,4);
console.log(rec1.getArea());

// 직사각형(Retangle)
class Retangle extends Shape{
    
    constructor(row, colum){
        super(row, colum);
        
    };
    getArea(row, colum){
        return  Math.sqrt((this.row) *(this.row) + (this.colum)*(this.colum) ); 
    };
}
//삼각형 넓이 구하는 클래스
class Triangle extends Shape{

    constructor(row, colum){
        super(row, colum);
    };
    getArea(row, colum){
        return (this.row * this.colum)/2;
    };
}

//circle 클래스 만들기
class Circle extends Shape{

    constructor(row, colum, radius){
        super(row, colum);
        this.radius;
    };

    getArea(){
        
    }
}


// 출력해햐 하는 부분
// 사각형 대각선 길이 구하기
let square = new Retangle(2, 5);
console.log(square.getArea());
//삼각형 넓이 반환
let triangle = new Triangle(2, 3);
console.log(triangle.getArea());