"use strict";
let mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/alphablog");

mongoose.Promise = global.Promise;

mongoose.connection.on("connected",()=>{ console.log("successfully connected to mongo"); });