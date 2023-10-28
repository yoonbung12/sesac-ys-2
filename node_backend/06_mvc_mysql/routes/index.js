const express = require("express");
const router = express.Router();
const controller = require("../controller/Cvisitor");



// -------:8000 -> index.ejs를 랜더한다.
router.get("/", controller.home);

// -------:8000/visitor -> visitor.ejs를 랜더한다.
router.get("/visitor", controller.visitor);


module.exports = router;
