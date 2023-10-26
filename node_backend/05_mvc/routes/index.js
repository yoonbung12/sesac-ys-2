const express = require("express");
// exxpress에서 모아두는 router객체다!
const router = express.Router( );
const controller = require("../controller/Cmain");

// localhost:8000/comment
router.get("/", controller.main);
router.get("/comments", controller.comments);

// localhost:8000/comment/aaa
// router.get("/aaa", controller.main);

module.exports = router; // router모듈을 내보낸다.