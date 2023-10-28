const express = require("express");
const router = express.Router();
const controller = require("../controller/Cvisitor");



// -------:8000 -> index.ejs를 랜더한다.
router.get("/", controller.home);

// -------:8000/visitors -> visitor.ejs를 랜더한다.
router.get("/visitors", controller.visitor);

// 방명록 등록하는 파트
// -------:8000/visitor -> visitor.ejs를 랜더한다.
router.post("/visitor", controller.postVisitor);

// 방명록 수정 파트
router.patch("/visitor/:id", function(req,res) {
    res.send("");
});

// 방명록 삭제 파트
router.delete("/visitor/:id", controller.deleteVisitor);


module.exports = router;
