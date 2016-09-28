"use strict";
let mongoose = require("mongoose");
let URLSlugs = require("mongoose-url-slugs");

let ArticleSchema = new mongoose.Schema({
  title: String,
  author: String,
  body: String
});

ArticleSchema.plugin(URLSlugs('title'));

let Article = mongoose.model("Article", ArticleSchema);

module.exports = Article;