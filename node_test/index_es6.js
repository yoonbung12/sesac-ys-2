// 하나만 가져올때(defalut 있이 가져오는 경우)
// import add2 from "./math_es6.js";
// math_es6.js에서 default 로 export 하고 있는 식별자를 add2라는 식별자로 받아옴
// console.log(add2(2, 3));

// 여러개 받아오려고 할때 사용
// import { add } from "./math_es6.js";
// console.log(add(2, 7));

//es6 문법에서 모듈을 import할때, 구조분해 없이 식별자를 만들어서 받아오는 방법은..
//module 파일(math_es6.js) 에 default로 export 하는 값이 있어야 한다.
import math from "./math_es6.js";
console.log(math.add(2, 3)); //오류가 발생한단!!!!

//------------두가지 방법 --------------
// import math from "./math_es6.js";
// import {} from "./math_es6.js";