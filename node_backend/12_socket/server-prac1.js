const http = require("http");
const express = require("express");
const app = express();
// socket이 http모듈로 생성된 서버에서만 동작함
const server = http.createServer(app);
const PORT = 8000;
// 오류방지 위해 npm i cors 미들웨어 설치
// cors 이슈: 다른 서버에서 보내는 요청을 제한함
const cors = require("cors");
app.use(cors());
const io = require("socket.io")(server, {
  cors: {
    origin: "http://localhost:3000",
    // methods: ["GET", "POST"],
  },
});
io.on("connection", (socket) => {
  console.log("socket id:", socket.id);
  socket.on("hello", (res) => {
    console.log(res);
    socket.emit("resHello", { msg: "안녕하세요" });
  });
  socket.on("study", (res) => {
    console.log(res);
    socket.emit("resStudy", { msg: "공부 중이에요!" });
  });
  socket.on("bye", (res) => {
    console.log(res);
    socket.emit("resBye", { msg: "다음에 보아요 ><" });
  });
});
server.listen(PORT, function () {
  console.log(`Server Open : ${PORT}`);
});