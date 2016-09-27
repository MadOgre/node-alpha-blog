"use strict";
let mongoose = require("mongoose");
let connection = mongoose.createConnection("mongodb://localhost/alphablog");

connection.on("connected",()=>{ console.log("successfully connected to mongo"); });