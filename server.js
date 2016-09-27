"use strict";
let express = require("express");
let app = express();

app.set("views", "./views");
app.set("view engine", "ejs");

let port = process.env.NODE_PORT || 3000;

app.listen(port, ()=>{ console.log(`Server running on port ${port}`); });