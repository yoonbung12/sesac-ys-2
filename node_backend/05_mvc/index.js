const express = require("express");
const app = express();
const PORT = 8000;

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// [before]
// app.get("/", function (req, res) {
//   res.render("index");
// });

// const router = require("./routes/index");
const router = require("./routes");
app.use("/", router);
// localhost:8000/~~~~~~

// 존재하지 않는 get 요청에 대해서
app.get("*", function (req, res) {
  res.send("페이지를 찾을 수 없습니다.");
});

app.listen(PORT, function () {
  console.log(`Sever Open: ${PORT}`);
});