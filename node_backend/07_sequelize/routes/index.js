const express = require("express");
const router = express.Router();
const controller = require("../controller/Cvisitor");


// 임시 라우터
router.get("/visitor/test/:id", controller.getTest);

// -------:8000 -> index.ejs를 랜더한다.
router.get("/", controller.home);

// -------:8000/visitors -> visitor.ejs를 랜더한다.
router.get("/visitors", controller.visitor);

// 방명록 등록하는 파트
// -------:8000/visitor -> visitor.ejs를 랜더한다.
router.post("/visitor", controller.postVisitor);

// 방명록 수정
router.patch("/visitor", controller.patchVisitor);

// 방명록 하나 조회
router.get("/visitor/:id", controller.getVisitedById);

// 방명록 삭제 파트
router.delete("/visitor/:id", controller.deleteVisitor);



module.exports = router;
