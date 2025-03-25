const express = require("express");
const router = express.Router();

let Task = require("../controllers/task");

router.post("/task", Task.create);
router.get("/tasks", Task.findAll);


module.exports = router