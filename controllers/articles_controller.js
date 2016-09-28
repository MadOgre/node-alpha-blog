"use strict";
let express = require("express");
let router = express.Router();

let Article = require("../models/article");

router.get("/", (req, res, next)=>{
  Article.find({}, (err, data)=>{
    if (err) {
      return next(err);
    } else {
      res.json(data);
    }
  });
});

module.exports = router;