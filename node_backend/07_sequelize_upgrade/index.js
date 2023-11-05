const express = require("express");
const app = express();
const session = require("express-session")
const port = 8000

app.set("view engine", "ejs");
app.use("/static", express.static(__dirname + "static"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(
  session({
    secret: "secret key",
    resave: false,// 모든 요청마다 session을 다시 저장할거냐??
    saveUninitialized: true, // 클라이언트가 처음 접속할때, 세션을 한번 초기화 할건지 말건지?
  })
)


const router = require("./routes");
app.use("/", router);

// 

app.get("*", (req, res) => {
  res.send("접근할 수 없는 주소입니다.");
});

app.listen(port, () => {
  console.log("Server Port : ", port);
});
