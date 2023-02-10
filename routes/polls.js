var express = require("express");
var router = express.Router();

const pollController = require("../controllers/poll");

//get polls
router.get("/get", pollController.findAll);
//create a new link
router.post("/create", pollController.create);

module.exports = router;
