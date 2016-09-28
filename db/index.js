"use strict";
let mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/alphablog");

mongoose.connection.on("connected",()=>{ console.log("successfully connected to mongo"); });