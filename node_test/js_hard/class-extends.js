class House{

    // 생성자
    constructor(name, year){
        this.name = name;
        this.year = year;
    }

    age(){
        console.log(`이 건물은 ${new Date().getFullYear() - this.year}년 되었습니다.`)
    }
}

const home = new House("새싹", 2010);
home.age();

// 아파트 클래스(홈클래스에 상속 된다..) Apartment- 자식, House- 부모
class Apartment extends House {
    // 생성자
    constructor(name, year, floor){
        // 부모의(House) 생성자 호출
        super(name, year);
        this.floor = floor;
    }

    // 오버라이딩: 부모에 있는 메소드를 자식이 다시 정의하는것
    age(){
        super.age();
        // console.log(`이 아파트는${new Date().getFullYear()- this.year}년 되었습니다.`);

        console.log(`입주는 ${this.year + 1}년 부터 시작했습니다.`);

    };
}


const apart = new Apartment("트라펠리스", 2015, 25);
console.log(apart.name, apart.floor);
apart.age();

    // 오버로딩: 똑같은 이름으로 여러개의 함수를 선언하는것~~~(매개변수의 개수를 )
    // 그러나 자바 스크립은 오버로딩이 없다(할수가 없다 이거다..)...자바라 다름!!!
    // function test(a, b){
    //     console.log(`a: ${a}, b: ${b}`);
    // }
    // 해결하고 싶으면 ? 조금의 기술을 쓰셔서 하나의 함수로 조건에 따라서 잘 실행되도록 하기..
    function test(a,b = 0,c = 0){
        console.log(`a: ${a}, b: ${b}, c: ${c}`);
        return a + b + c;
    }
    test(2,5);







// class Student{
//     constructor(){
//         // 이름
//         // 나이
//         // 주민 번호

//     }
//     // 메소드
//     // 밥 먹는다
//     // 잠을 잔다.
// }
