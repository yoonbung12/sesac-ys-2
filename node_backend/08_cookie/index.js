const express = require("express");
const app = express();
const PORT = 8000;
const cookieParser = require("cookie-parser");

app.set("view engine", "ejs");
app.use(cookieParser()); // 쿠키를 해석 + 사용 가능하게 해줌.

const cookieConfig = {
    // httpOnly: true, // document.cookie 로 접근 불가. 서버에서만 쿠키에 접근할 수 있다.
    // 
    maxAge: 24 * 60 * 60 * 1000, // ms단위로 보존하고 하는 기간을 설정
    // expries: "2023-11-04T18:00"
    // path: "/" ,// "/test" -> localhost:8000/test/~~~~~~~~~~~
    // secure: true, // https 보안이 설정된 서버에서만 쿠키를 동작하게 한다.
    // signed: true, // 쿠키 암호화 ->  req.signedCookies 여기서 조회한다.
}
app.get("/", (req, res) => {
    // res.send("hello World");
    res.render("index");
});

app.get("/set", (req, res) => {
    // 서버가 쿠키를 만들어서 응답으로 보낸다.
    // key : key1 / value : value1
    res.cookie("key1", "value1", cookieConfig);
    res.cookie("popup", "1", cookieConfig);
    res.send("set cookie");
})

app.get("/get", (req, res) => {
    console.log("cookie: ",req.cookies.key1);
    res.send(req.cookies);
    
    // req.signedCookies
    
})

app.listen(PORT, function () {
  console.log(`Sever Open: ${PORT}`);
});