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
    res.render("index", {user: req.session.user});
})

app.get("/set", (req, res)=>{
    
    console.log("1:", req.session);
    // 로그인 성공한 시점에 req.session.user에 user를 식별할 수 있는 고유한값.
    req.session.user = "bonggu";
    console.log("2: ", req.session);
    res.send("helloWorld");
})
app.get("/", (req, res) => {
    req.session.destroy((err) => {
        if(err) throw err;

        res.send("로그아웃 성공");
    })
})
app.get("/get", (req, res) => {
    if(req.session.user) {
        res.render("profile", {})
    } else {
        res.render("");
    }
    console.log("user", req.session.user);
    res.send({ user: req.session.user})
})



app.get("/get", (req, res) => {
    console.log("cookie: ",req.cookies.key1);
    res.send(req.cookies);
    
    // req.signedCookies
    
})

app.listen(PORT, function () {
  console.log(`Sever Open: ${PORT}`);
});