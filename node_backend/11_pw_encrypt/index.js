// 암호화 공부 11/7
const crypto = require("crypto");


function createHashedPw(pw){
                        // (알고리즘 종류)
    return crypto.createHash("sha512").update(pw).digest("base64");
}

console.log("pw 1234: ", createHashedPw("1234"));
console.log("pw 1235: ", createHashedPw("1235"));

const input = "12345678";
const dbPw = "1235";

console.log("compare result: ", createHashedPw(input) == dbPw);


console.log("compare result: ", createHashedPwWithSalt(input) == dbPwSalt); // salt값은 계속해서 랜덤으로 줘서 같을수가 없다.

function createHashedPwWithSalt(pw){
    const salt = crypto.randomBytes(16).toString("base64");
    console.log("salt:", salt);
    const iterations = 100;
    const keylen = 64;
    const digest = "sha512";
    return crypto
        .pbkdf2Sync(pw, salt, iterations, keylen, digest)
        .toString("base64");
    // 암호화할 문자열, salt값, 반복횟수, 키의 길이, 알고리즘
}

function comparePw(pw, salt){
    console.log("salt:", salt);
    const iterations = 100;
    const keylen = 64;
    const digest = "sha512";
    return crypto
        .pbkdf2Sync(pw, salt, iterations, keylen, digest)
        .toString("base64");
    // 암호화할 문자열, salt값, 반복횟수, 키의 길이, 알고리즘    
}
const dbPwSalt = "ujN/5bI3t0C/1gKHbLec/AZf+YTupfnSKiXDLaAuYZxGFKKVcco91/im5C/6QP8QS1H5me349Zi65XsmYTon7w==";
const dbSalt = "I8p1KfY0zRn5WCx5dujSkw=="


console.log("compare result with salt: ", createHashedPwWithSalt(input, dbSalt) == dbPwSalt); // salt값은 계속해서 랜덤으로 줘서 같을수가 없다.


// console.log("pw 1234 with salt:  ", createHashedPwWithSalt("1234"));



