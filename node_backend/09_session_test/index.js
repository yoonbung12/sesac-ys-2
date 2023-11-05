const express = require("express");
const app = express();
const PORT = 8000;
const session = require("express-session");

app.use(session({
    secret: "secret key",
    resave: false, // 모든 요청마다 session을 다시 저장할거냐??
    saveUninitialized: true, // 클라이언트가 처음 접속할때, 세션을 한번 초기화 할건지 말건지?
    cookie: {
        httpOnly: true, // document.cookie로는 접속 XX   
        maxAge: 30000,
    },
    secure: true, // https에서만 동작하도록 함.
}))

app.set("view engine", "ejs");


app.get("/", (req, res) =>{
    const member = req.session.member
    res.render("index", {member});
})

app.get("/set", (req, res)=>{
    // 아이디랑, 비번 받아야함.
    req.session.member = "bongbong";
    req.session.pw = "1234";
    console.log("memberName: ", req.session);
    console.log("pw: ", req.session);
    res.send("회원을 생성하였어..");
})

app.get("/get", (req, res) => {
    const member = req.session.member;
    if(member != null){
        console.log(req.session.member);
        res.send("로그인에 성공하였습니다.");
    } else {
        console.log("GGGGGGGGG");
        res.redirect("index");
    }
})



app.listen(PORT, function () {
  console.log(`Sever Open: ${PORT}`);
});