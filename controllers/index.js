"use strict";
module.exports = function(app) {
  app.use("/", require("./static_pages_controller"));
};