// function add(){
//     const a;
//     const b;
//     return a + b;
// }
const add = (a, b) => a + b;
const minus = (a, b) => a - b;
const PI = 3.14;


// --------case (2,3)
// **************내보내기(다른 곳에서 사용 할 수 있도록)
// 여러 식별자를 객체로 내보낸다....
module.exports.add = (a, b) => a + b;
module.exports.minus = (a, b) => a - b;
mocule.exports.PI = 3.14;
// const data = {  //
//     add,
//     minus,
//     PI
// }

// module.exports = {
//  //모듈로 만들어 버림 export 안하면 다른 파일에서 못쓴다.함수를 넘길시 이름만 쓴다...()가로 사용 안함!!!!!*************
//     add,
//     minus,
//     PI
//     // 아래거랑 같은거다...
// };
// ------------------------------------
//-------------------------------------

// -------case 1
// 파일에서 한개의 식별자만 내보내는 경우
//module.exports = add;

// const data = {   
// ***(key) : (value)***
//     add : add,
//     minus : minus,
//     PI : PI
// }



// 위에 코드랑 같다!
// const add2 = (a, b) => {
//     return a + b;
// }