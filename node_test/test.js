// function first() { 
//     second(); 
//     console.log(1);
//      return;
// }
// function second() { 
//     console.log(2); 
//     return;
// } 

// first();
function run(){
    console.log("3초 뒤 실행");
}

console.log("시작");

// 콜백 함수 : 함수의 인자로 함수로 넘길 때, 인자로 넘기는 그 함수
// 함수의 이름만 넘기면 된다!!! run() -- > 안된다.XXXX..!!! (함수이름)run만 써야함!!!!
setTimeout(run, 3000);
console.log("END");