// ----Test1 시작-----------ㅔ-----
function call(name){
    return new Promise((resolve, reject) =>{
        setTimeout(function(){
            console.log(name);
            resolve(name);
        }, 1000);
    })

}

function back(cb){
    return new Promise((resolve, reject) => {
        setTimeout(function(){
            console.log("back");
            resolve("back");
        }, 1000);
    })

}

function hell() {
    return new Promise((resolve, reject) =>{
        setTimeout(function(){
            // console.log("callBack hell");
            resolve("callBack hell ");

        }, 1000);
    })

}

// call("kim")
// .then((name){
//     console.log(name + "반가워" );
//     return back();
// })
// .then((txt){
//     console.log(txt + "을 실행 했네");
//     return hell();
// })
// .then(function(message){
//     console.log("여기는 " +message);
// })

// call함수로 짜여진것 이거는 진짜 쓰레기 코드
// // call('kim', function(name) {
// //     console.log(name + "HIHI");
// //     back(function(txt) {
// //         console.log(txt + "을 실행 했네?");
// //         hell(function(message) {
// //             console.log("여기는 " + message);
// //         });
// //     });
// // });

// // -------------TEST1 끝---------------------------

// ------------------TEST2 시작(Test1에서 했던걸 async로 바꾸기)-------
async function exec(){

    const user = await call("kim");
    console.log(user + "님 반가워요~~");
    const backPart = await back(" hell");
    console.log(backPart + "을 실행 했구만");
    const message = await hell("callBack");
    console.log("여기는" + message);

}

exec();

//  -------------TEST2 끝------------------------------


