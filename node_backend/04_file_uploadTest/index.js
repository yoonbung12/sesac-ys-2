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

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//클라이언트가 uploads 폴더에 저장한 이미지 파일에 접근할 수 있도록, 미들웨어 작성
app.use("/uploads", express.static(__dirname + "/uploads"));

const upload = multer({
    dest: "uploads/",
});

const uploadDetail = multer({
    
    storage: multer.diskStorage({
        destination: function(req, file, done){
            done(null, "uploads/");
        },
        filename: function(req, file, done){
            console.log("uploadDetail fileName", req.body);
            console.log(file);
            const ext = path.extname(file.originalname);
            const basename = path.basename(file.originalname, ext);
            const fileName = basename + "_" + Date.now() + ext;

            done(null, fileName);
        },
    }),

});


app.get("/", function(req, res){
    // res.send("연결 성공이요~~");
    res.render("index");
})

app.post("/upload/detail", uploadDetail.single("userFile"), 
    function(req, res) {
    console.log("file detail", req.file);
    console.log("body detail", req.body);
    res.render("result", {
        src: req.file.path,
        title: req.body.title,
        id: req.body.id,
        pw: req.body.pw,
        name: req.body.name,
        age: req.body.age


    })
});
//  동적파일 전송
app.post("/upload/dynamic", uploadDetail.single("userFile"),
        function(req, res){
            res.send({src: req.file.path,
                    id: req.body.id,
                    pw: req.body.pw,
                    name: req.body.name,
                    age: req.body.age
            });
})



app.listen(PORT, function () {
    console.log(`Sever Open: ${PORT}`);
  });