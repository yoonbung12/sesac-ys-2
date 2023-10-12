// ---------****객체 구조분해 할당 **방법 ------------------------------
const fruits = ["banana", "apple", "grape"];

const [banana2,apple2,grape2, melon = "melon"]  = fruits;
console.log(apple2, melon);

//사실상 아래 코드와 동일한 작업을 하고 있다.
// const banana2 = fruits[0];
// const apple2 = fruits[1];
// const grape2 = fruits[2];

let x=1, y=3;
[x, y] = [y, x];
console.log(x, y);
// 이것의 의미는 둘의 값을 치환하기
// x = y 넣고 x = 3
// y = x 를 넣는다... y= 1 

// let temp = x;
// x = y; //x = 3 , y = 3;
// y = temp; // y = x,  // y= 3


// key 로 값을 구분
const obj = {
    name: "bonggu",
    age: 22,
    gender: "남"
};

//          key 이름 바꾸는 방법 
const {age, name: name2, gender, test ="test"} = obj;
console.log(age, name2);

// const age = obj.age;
// const name = obj.name;


const arr1 = [1,2,3,4,5];
const arr2 = ["a", "b" , "c", "d"];
// const arr3 = [arr1[0] , arr2[0] ~~~~] 하드 코딩이네...
//for() 문도 있고
// ...변수명 = 스플릿  연산자랑 비슷하네..
const arr3 = [...arr1, ...arr2];
console.log(arr3);

// ...[1,2,3,4,5] =>  1, 2, 3, 4, 5 (배열로 감싸놨던걸 풀어준다...)
const hello = [..."hello"];
//  hello = ["h", "e", "l", "l", "o"];
console.log(hello);

const word1 = "abc";
const word2 = "xyz";
const totalWord = [...word1, ...word2];
console.log(totalWord);

const obj2 =  {
    name: "bonggu",
    age: 25,
    gender: "남"
}
const obj3 = {
    ...obj2, 
    hobby: "kickBoxing"
};
console.log(obj3);


const values = [10, 20, 30];
function get(a, ...rest){
    console.log("a",a); // 10출력
    console.log("rest", rest); // [ 10 , 20]
}

get(...values);

// ...[10,20,30] => 10,20,30
