const express = require("express");
const router = express.Router();
const controller = require("../controller/Cmain");

// localhost:8000/
router.get("/", controller.main);

// localhost:8000/comments
router.get("/comments", controller.comments);

module.exports = router;