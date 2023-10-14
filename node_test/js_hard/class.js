//----- 객체 ---
const cat1 ={
    name: "navi",
    age: 9,
    mew: function(){
        console.log("먀아아옹");
    }
};

const cat2 ={
    name: "naana",
    age: 3,
    mew: function(){
        console.log("먀아아옹");
    }
};
const cat3 ={
    name: "bong",
    age: 1,
    mew: function(){
        console.log("먀아아옹");
    }
};


// 클래스
// PascalCase 규칙을 이용해서 식별자 생성
// camelCase에서 첫글자를 대문자로 바꾼 방식
class Cat { //클래스 명 : Cat
    // constructor(생성자): 메소드의 일종 
    // 메소드 중에서 Cat클래스를 이용해서 객체를 만드는 순간에 호출되는 메소드
    constructor(name, age){ 
        this.name = name; // this.name 과 name 은 다른 공간에 존재한다..
        this.age = age;

    }
    // mew(메소드)  
    mew(){
        console.log("AAA~~~~~")
    }

    // 고양이의 정보를 콘솔로 찍는 함수
    info(){
        console.log(`이름은: ${this.name}, 나이는 : ${this.age}살`);
        
    }


}


const cat4 = new Cat("navi",9); //constructor()-- 가로 안에 있는 값이랑 같아야 한다.!!!
const cat5 = new Cat("jangha", 3);
console.log(cat4.name, cat5.name);
cat5.mew();
cat4.info();