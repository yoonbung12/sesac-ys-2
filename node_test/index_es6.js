// 하나만 가져올때(defalut 있이 가져오는 경우)
// import add2 from "./math_es6.js";
// math_es6.js에서 default 로 export 하고 있는 식별자를 add2라는 식별자로 받아옴
// console.log(add2(2, 3));

// 여러개 받아오려고 할때 사용
import { add } from "./math_es6.js";

console.log(add(2, 7));