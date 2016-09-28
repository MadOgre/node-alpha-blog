"use strict";
let express = require("express");
let router = express.Router();

let Article = require("../models/article");

router.get("/", (req, res, next)=>{
  Article.find({}, (err, data)=>{
    if (err) {
      return next(err);
    } else {
      res.render("articles/index", {articles: data});
    }
  });
});

router.get("/:slug_or_id", (req, res, next)=>{
  Article.findOne({slug: req.params.slug_or_id}, (err, data)=>{
    if (err) {
      return next(err);
    }
    if (data) {
      return res.render("articles/show", {article: data});
    }
    if (req.params.slug_or_id.match(/^[0-9a-fA-F]{24}$/)) {
      Article.findById(req.params.slug_or_id, (err, data)=>{
        if (err) {
          return next(err);
        }
        if (data) {
          return res.render("articles/show", {article: data});
        }
      });
    }
    return next();
  });
});

router.post("/", (req, res, next)=>{
  Article.create(req.body, (err, data)=>{
    if (err) {
      return next(err);
    } else {
      res.redirect
    }
  });
});

module.exports = router;