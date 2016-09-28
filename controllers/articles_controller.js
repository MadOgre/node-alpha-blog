"use strict";
let express = require("express");
let router = express.Router();

let Article = require("../models/article");

router.get("/", (req, res, next)=>{
  Article.find({}, (err, data)=>{
    if (err) return next(err);
    return res.render("articles/index", {articles: data});
  });
});

router.get("/new", (req, res)=>{
  res.render("articles/new");
});

module.exports = router;