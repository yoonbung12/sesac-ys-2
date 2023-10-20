const express = require("express");
const app = express();
const PORT =8001;

// -----미들워어 설정-----
app.set("view engine", "ejs");

app.use(express.urlencoded({extended: true}));
//x-www-form-urlencoded 형태의 데이터 해석
// extended: true 일 경우 qs 모듈(외부모듈)을 이용, false인 경우 내장모듈인 queryString을 사용.
app.use(express.json());
// application/json 형태의 데이터를 해석

// port 열기
app.listen(PORT, function(){
    console.log(`PORT 열렸다 ${PORT}`);
});

// 서버 열리고 테스트로 찍어보자
app.get("/", function(req, res){
    // res.send("안녕 Express다~₩₩"); //두개 다쓰면 에러뜸
    res.render("index");
});

app.get("/axiosGet", function(req, res){
    console.log(req.query);
    res.send(req.query);
    // res.render("index");
});

app.post("/axiosPost", function(req, res){
    const id = "bonggu12";
    const pw = "1q2w3e4r";
    
    console.log(req.body);
    if(req.body.id == id && req.body.pw == pw){
        res.send({success: true, message:"성공했구만", name: req.body.name});
    }
})
