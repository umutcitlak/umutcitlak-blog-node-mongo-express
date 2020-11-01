const path = require("path");
var express = require("express");
var exphbs = require("express-handlebars");
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/nodeblog_db', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
 
});

var app = express();
app.use(express.static("public"));
app.engine("handlebars", exphbs());
app.set("view engine", "handlebars");

const main = require('./routers/main');
app.use('/',main)

app.listen(3000,'localhost',()=>{
  console.log("http://127.0.0.1:3000");
});
