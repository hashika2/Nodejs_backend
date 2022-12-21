let express = require("express");
let router = express.Router();
const carousel = require("../controller/carousel.controller");

router.get("/carousel", (req,res)=> carousel.getAll(req,res));

module.exports = router;