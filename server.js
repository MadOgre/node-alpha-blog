"use strict";
let express = require("express");
let app = express();

app.set("views", "./views");
app.set("view engine", "ejs");

require("./controllers")(app);
require("./db");

app.use((req, res)=>{
  res.status(404).render("common/404");
});

app.use((err, req, res, next)=>{
  if (app.get("env") === 'development') {
    res.status(500).json(err);
  } else {
    res.status(500).render("common/500");
  }
  next();
});

let port = process.env.NODE_PORT || 3000;

app.listen(port, ()=>{ console.log(`Server running on port ${port}`); });