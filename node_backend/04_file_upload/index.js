const express = require("express");
// 파일 업로드 할려고 multer 가져옴
const multer = require("multer");

const path = require("path");
// path: 퍄일 경로를 받았을때, 그 조작을 도와준다.
// ex) 확장자 추출, 파일이름을 추출 
console.log("hi.txt의 확장자: ", path.extname("hi.txt"));
console.log("hi.txt의 확장자: ", path.basename("hi.txt",  path.extname("hi.txt")));

const app = express();
const PORT = 8000;

//클라이언트가 uploads 폴더에 저장한 이미지 파일에 접근할 수 있도록, 미들웨어 작성
app.use("/uploads", express.static(__dirname + "/uploads"));

// upload라는 객체 안에는 미들웨어 함수가 존재. single(), array(), filed()
// 미들웨어: 요청과 응답 사이에 존재. (next())
// multer 가 임의의 문자열을 생성해서 그 문자열을 파일 이름으로 만듬.
// 심지어 확장자도 붙여주지 않음
const upload = multer({
    dest: "uploads/", //dest: 목적지
});
// 상세 설정할때
const uploadDetail = multer({
    //
    storage: multer.diskStorage({
        destination: function(req, file, done) {
            //파일 경로 설정
            done(null, "uploads/");
        },
        filename: function(req, file, done) {
            console.log("uploadDetail fileName", req.body);
            console.log(file); // file.originalname, 미니언.webp
            const ext = path.extname(file.originalname); // .webp
            const basename = path.basename(file.originalname, ext ) // 미니언
            // 미니언_1231241312.webp
            const fileName = basename + "_" + Date.now() + ext;

                //"지정할 파일 이름"
            done(null, fileName );
        },
    }),
    limits: {fileSize: 5 * 1024 * 1024}, //5MB 제한
});

// storage: 파일을 저장할 정보를 설정
    // 1) diskStorage : 파일을 디스크에 저장하기 위한 기능을 제공하는 메소드
    // 2) destination : 파일이 저장될 경로   
    // 3) fileName : 파일이 저장될 이름

// limits:
    // fileSize : 파일의 최대 크기
    

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  res.render("index");
});
//  (single(), array(), fileds() 미들웨어 : 클라이언트가 보낸 요청 중에 userFile이라는 name의  파일 데이터가 있다면 )
// 파일을 multer의 설정대로 저장해서, req.file이라는 객체를 생성해서 다음 함수에 넘겨준다.
// (single()) : 파일 하나만 업로드할때 사용하는것 ->req.file 생성
app.post("/upload", upload.single("userFile") , function(req, res){
    // console.log(req.body);
    console.log("req.file",req.file);
    console.log("req.body", req.body);
    res.send("파일 업로드");
});

// 파일상세올리기(detail)
app.post("/upload/detail", uploadDetail.single("userFile"), 
    function(req, res){
    console.log("file detail",req.file);
    console.log("body detail", req.body);
    // res.send("파일 업로드");
    res.render("result", {
        src: req.file.path,
        title: req.body.title,
    })
});

// 파일 여러개 업로드(array사용) - name(input) 하나로 여러개의 파일을 받는 방법
// req.files 생성
app.post("/upload/array", uploadDetail.array("userFile") ,function(req, res){
    console.log("file 여러개 업로드", req.files);
    res.send("여러개 업로드 성공(ver1)");
});

// fields() : 파일 여러개 업로드, name이 두개 이상(input이 2개 이상)
app.post("/upload/fields",
    uploadDetail.fields([{name: "userFile1"}, {name: "userFile2"}]), 
    function(req, res){
        console.log("파일 여러개(ver2):" , req.files);
        console.log("req.body:", req.body);
        res.send("여러개의 업로드 성공(ver2)");
})

app.listen(PORT, function () {
    console.log(`Sever Open: ${PORT}`);
  });

