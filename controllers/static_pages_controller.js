"use strict";
let express = require("express");
let router = express.Router();

router.get("/", (req, res)=>{
  res.render("static_pages/index");
});

module.exports = router;
