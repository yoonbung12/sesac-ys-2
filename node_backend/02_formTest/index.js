const express = require("express");
const app = express();
const PORT = 8001;

// =--------미들 웨어------------
app.set("view engine", "ejs");
//x-www-form-urlencoded 형태의 데이터 해석
// extended: true 일 경우 qs 모듈(외부모듈)을 이용, false인 경우 내장모듈인 queryString을 사용.
app.use(express.urlencoded({extended: true}));
app.use(express.json());
// application/json 형태의 데이터를 해석


// localhost:8000 url 접속에 대한 응답을 위해 만든 코드
app.get("/", function(req, res){
    res.render("index");
});

app.get("/get", function(req, res){
    console.log(req.query);
    res.send("get 요청 성공이요");
})

// post 해보자고 처음 문제
// app.post("/postForm", function(req,res){
//     console.log(req.body);
//     // res.render("result", {
//     //     name: req.body.name,
//     //     gender: req.body.gender,



//     // })
// })

app.listen(PORT, function(){
    console.log(`Server OPEN: ${PORT}`);
});