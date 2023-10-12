const express = require('express'); // express 모듈 import 
const app = express(); //server 객체
const PORT = 8000; //port 번호
// 1 ~ 65536 존재. 1 ~ 1023까지는 정해진 기능이 있다...
// 보통 사용하는 포트 번호 3000, 8000, 8080, 3010, 3001, 8081등등
// 3306: mySql에서 사용(이거 피해서 사용)

//app 객체의 view engine 설정을 ejs로 바꾼다..
app.set("view engine","ejs");
// app객체의 view 폴더를 설정 기본값 : ./views
// 만약 ./view 폴더로 바꾸고 싶다면 아래처럼 작성하면됨
// app.set("views", "./view") ---이게 기본값!!!




// get 메소드(HTTP 메소드): 클라이언트가 요청할 수 있는 방법들을 정의한다.
// [localhost:8000/ ]이 형태로 되어 있다..
app.get('/', function(req, res){
    // 응답 객체 내의 send메소드를 실행시킴. ('hello express)문자열을 응답으로 전송하겠다..
    res.send('hello express');
    
});
// http 메소드의 두번째 인자로 넘겨주는 콜백함수의 매개 변수2개
// 첫번째 매개변수 : request 객체(요청)
// 두번째 매개변수 : response 객체(응답)

// localhost:8000/test
app.get("/test", function(req, res){
    // res.send("<div style:'color:red'>HIHIHIHIH</div>");
    console.log(__dirname); // /Users/yun-byeong-woo/Documents/GitHub/sesac-ys-2/node_backend/01_express
    res.sendFile(__dirname + "/index.html"); //절대경로
    // 상대경로는 error 발생한다****
    //res.sendFile("./index.html") //node내에서는 상대경로로 접근을 할 수가 없다.!!!!*********8
});

app.get("/test/index" , function(req, res){
    // render 메소드의 기본 dir "./views" 
    //res.render("index");
    res.render("test/index"); //views폴더안에 ->test폴더안에 ->index가 있다.

});

app.get("/bonggu", function(req, res){
    res.render("bonggu");
});

// 서버를 연다~~
// localhost:8000 혹은 127.0.0.1:8000
app.listen(PORT, function(){
    console.log(`Listening on port ${PORT}! http://localhost:${PORT}`);
});