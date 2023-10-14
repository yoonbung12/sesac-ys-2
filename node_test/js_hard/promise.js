// Promise 기본 예시----------------------------------
// function promise1(flag){
//     return new Promise(function(resolve, reject) {
//         if(flag){
//             resolve(`상태 fullfilled ! then 으로 연결`);
//         } else {
//             reject(`상태 rejected ! catch 로 연결`);
//         }
//     });

// }

// // 특정 함수가 return 하는 값이 promise 객체일 경우 ,
// // chaining으로 then ,catch 라는 메소드 사용할  수 있다..
// promise1(true).then((result) => {
//     // result 에는 resolve로 보낸 인자값이 들어오게 된다..
//     // 여기서는 `상태 fullfilled ! then 으로 연결` 문자열
//     console.log(result);
// }).catch((err) => {
//     console.log(err);
// });

// // catch로 가는걸 보기 위해서(false를 넣어줌)
// promise1(false).then((result) => {
//     console.log(result);
// }).catch((err) => {
//     console.log(err);
// });

// -----------------------------------------------------

// 콜백을 일부러 발생시킨 경우~-------------------------------
// function add(n1, n2, cb){
//     setTimeout(function(){
//         let result = n1 + n2;
//         cb(result);
//     }, 1000);
// }

// function mul(n, cb ){
//     setTimeout(function() {
//         let result = n * 2;
//         cb(result);
//     }, 700);
// }

// function sub(n, cb){
//     setTimeout(function() {
//         let result = n - 1;
//         cb(result);
//     }, 500);
// }

// add(4, 3, function(x){
//     console.log(`1: `, x);
//     mul(x, function(y){
//         console.log(`2: `, y);
//         sub(y, function(z){
//             console.log(`3: `, z);
//         });
//     });
// });

/// --------promise로 변경--------------------
function add(n1, n2){
    return new Promise((resolve, reject) => {
        setTimeout(function(){
            let result = n1 + n2;
            resolve(result);
        }, 1000);
    });
    
}

function mul(n){
    return new Promise((resolve, reject) => {
        setTimeout(function() {
            let result = n * 2;
            reject("오류 발생");
            // resolve(result);
        }, 700);
    })
   
}

function sub(n){
    return new Promise((resolve, reject) => {
        setTimeout(function() {
            let result = n - 1;
            resolve(result);
        }, 500);
    })
   
}

// then 내부에서 promise에서 받아온 promise객체면 이어서 then 사용 가능하다
add(4, 3)
.then((result) => { 
    console.log(`1: `, result);
    return mul(result);
})
.then((result) => {
    console.log(`2: `, result);
    return sub(result);
})
.then((result) => {
    console.log(`3: `, result);
     
})
.catch((err) => {
    console.log(`error`);
});

//  -------------- promise 변경 끝--------------------------