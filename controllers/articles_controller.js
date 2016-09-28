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

router.get("/:slug", (req, res, next)=>{
  Article.findOne({slug: req.params.slug}, (err, data)=>{
    if (err) return next(err);
    if (data) {
      res.render("articles/show", {article: data});
    } else {
      next();
    }
  });
});

router.get("/new", (req, res)=>{
  res.render("articles/new");
});

router.post("/new", (req, res, next)=>{
  Article.create(req.body, (err, data)=>{
    if (err) return next(err);
    res.redirect("/articles");
  });
});

module.exports = router;