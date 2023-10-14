// ----------문제 발생 코드------------------

// function goMart(){
//     console.log("마트에 가서 어떤 음료를 살지 고민한다...");
// }

// let product;
// let price;

// function pickDrink(){
//     setTimeout(function(){
//         console.log("고민 끝!!");
//         product = "제로 코크";
//         price = 2000;
//         //pay(product, price)

//     }, 3000); //3초후
// }

// function pay(product, price){
//     console.log(`상품: ${product},  가격 ${price}`);
// }

// goMart();
// pickDrink(pay); //함수를 정의하는 코드를 넘긴다 pay를 넘긴다.!!
// pay(product, price);

// ------------콜백 함수(부분)--------------------
// function goMart(){
//     console.log("마트에 가서 어떤 음료를 살지 고민한다...");
// }

// let product;
// let price;

// function pickDrink(callback){
//     setTimeout(function(){
//         console.log("고민 끝!!");
//         product = "제로 코크";
//         price = 2000;
//         callback(product, price); //이게 pay이다...
//         //pay(product, price)

//     }, 3000); //3초후
// }

// function pay(product, price){
//     console.log(`상품: ${product},  가격 ${price}`);
// }

// goMart();
// pickDrink(pay); //함수를 정의하는 코드를 넘긴다 pay를 넘긴다.!!
// // pay(product, price);
//  -----------------------------------------------------

// -----------------------promise로 해결하는 방법-------------
// function goMart(){
//     console.log("마트에 가서 어떤 음료를 살지 고민한다...");
// }

// let product;
// let price;

// function pickDrink(){
//     // promise로  해결한 부분
//     return new Promise(function(resolve, reject){
//         setTimeout(function(){
//             console.log("고민 끝!!");
//             product = "제로 코크";
//             price = 2000;
//             resolve(true); // 이시점에 끝났다는것을 인지 할것!!!!그렇게 해서 then으로 넘어감
//         }, 3000); //3초후
//     });
  
// }


// function pay(product, price){
//     console.log(`상품: ${product},  가격 ${price}`);
// }

// goMart();
// pickDrink().then(() => {
//     pay(product, price);
// }); 
// pay(product, price);
// ---------------------------------------


// ------------promise를 async 로 바꿔봐
function goMart(){
    console.log("마트에 가서 어떤 음료를 살지 고민한다...");
}

let product;
let price;

async function pickDrink(){
    // promise로  해결한 부분
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            console.log("고민 끝!!");
            product = "제로 코크";
            price = 2000;
            resolve(true); // 이시점에 끝났다는것을 인지 할것!!!!그렇게 해서 then으로 넘어감
        }, 3000); //3초후
    });
  
}


function pay(product, price){
    console.log(`상품: ${product},  가격 ${price}`);
}



// goMart();
// pickDrink().then(() => {
//     pay(product, price);
// }); 

async function exec(){
    goMart();
    await pickDrink();
    pay(product, price);
}
exec();

// ----------------- async / await 변경 끝 ------------------