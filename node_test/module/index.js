// ------------case 3 
// 파일에서 여러개의 식별자를 객체 형태로 내보내는 경우
// 특정 식별자만 필요한 경우(add, minus) 모듈을 받아올 때 객체구조분해 할당 문법이다..
const { add, minus } = require("./math.js"); //add라는 함수만 가져올려고 할때 key값 적는다.
const sum = add(2, 3);
console.log(sum); 
console.log(PI); // 이거는 오류 !!! add만 불러왔기 때문이다...

// -----------case 2
// 파일에서 여러개의 식별자를 객체 형태로 내보내는 경우
// 모듈을 받아 올때 객체를 그대로 math라는 식별자로 받음
//const math = require("./math.js"); //require (**다른 모듈 불러오기**)
// const add = require("./math.js");
//const add2 = require("./math.js"); //math.js를 불러 오겄다. require(모듈을 불러오는 함수)
// const sum = math.add(3,6);
// console.log(sum);


// -------case 1
// 파일에서 한개의 식별자만 내보내는 경우
// const sum = math.add(3, 5);
// // const sum = add(2, 5);
// console.log(sum);
// console.log(math.PI);
