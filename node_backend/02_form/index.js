const express =require("express");
const app = express();
const PORT = 8000;

// =--------미들 웨어------------
app.set("view engine", "ejs");


// body-parser(req.body를 해석하기 위한 코드)
app.use(express.urlencoded({ extended: true}));
//x-www-form-urlencoded 형태의 데이터 해석
// extended: true 일 경우 qs 모듈(외부모듈)을 이용, false인 경우 내장모듈인 queryString을 사용.
app.use(express.json());
// application/json 형태의 데이터를 해석

//---------------------


// localhost:8000 url 접속에 대한 응답을 위해 만든 코드
app.get("/", function(req, res){
    res.render("index");
});
// ===============get  공부 시작=================
// get 요청은 url로 접속이 가능하다.
// get 요청은 req.query에 데이터가 담겨서 온다.
// 데이터 전송시에 form태그를 이용할 경우 method를 get으로 해놓으면 get요청이 된다...
// get 요청은 url에 직접 query를 만들어서 전송이 가능하다.
// 정보를 조회하는 요청에 사용한다. CRUD중 R에 속한다.
// ***url에 데이터가 노출된다... 중요**** 즉 개인정보를 보호하기 위한 전송은 get으로 하면 안된다.*****************
// localhost:8000/get
app.get("/get", function(req, res){
    // req.query //get요청을 받으려면 req.query를 사용해야함.
    // req.query : get 요청에 대해 client가 보낸 데이터를 담고 있다.
    // url에서 기본 주소(localhost:8000) 뒤에 오는 id?sdf&pw=1234 이런 주소를 의미
    // ?id=sdfsdf&pw=1234
    console.log(req.query );
    console.log(req.query.id ); // index.ejs에서form 안에  name="id"
    res.send("get요청 성공!!!!!");
});

// 조회, 데이터 삽입(db에 저장), 원래 있던 데이터를 변경하기 위해서 사용
// CRUD(Create, Read, Update, Delete);

// app.get("/getTest", function(req, res){
//     console.log(req.qeury);
//     res.send("Post요청 성고이다 이");
    
// });
// ===============get 끝=============

// ===============Post 부분==========
// localhost:8000/post로 post요청을 받기 위해 준비
// post 요청은 url로 직접 요청하는 것은 불가능하다!!
// post 요청에 대한 데이터는 req.bod에 담아서 온다..
// 정보가 숨겨진다. (url에 노출되지 않는다.) 데이터를 새로 생성하는 요청에 주로 사용(CRUD중 C를 의미하는 요청에 사용)
// app.post("/post", function(req, res){
//     console.log(req.body);
//     res.send("post 요청 성공");

// });

app.post("/post/ver2", function(req, res){
    console.log(req.body);
    res.render("result", {
        name: req.body.name,
        email: req.body.email,
    });

});



app.listen(PORT, function(){
    console.log(`Server Open: ${PORT}`);
});

