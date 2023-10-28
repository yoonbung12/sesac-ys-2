const express = require("express");
const router = express.Router();
const controller = require("../controller/Cuser");

// localhost:8000/user
router.get("/", controller.main);

module.exports = router;