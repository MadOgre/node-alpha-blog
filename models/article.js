"use strict";
let mongoose = require("mongoose");

let ArticleSchema = new mongoose.Schema({
  title: String,
  author: String,
  body: String
});

let Article = mongoose.model("Article", ArticleSchema);

module.exports = Article;