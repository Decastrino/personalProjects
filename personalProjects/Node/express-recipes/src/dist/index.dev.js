'use strict'; // Instantiating the Express application

var _require = require("assert"),
    strict = _require.strict;

var express = require("express");

var path = require("path");

var app = express(); // ----> Instance of Express server declaared at the top

var port = process.env.PORT || 5000; // Middleware function that takes in req, res, and next as args.

app.use(function (req, res, next) {
  //console.log(req.method, req.path);
  var method = req.method,
      path = req.path;
  console.log("New request to: ".concat(method, " ").concat(path, " at ").concat(new Date().toISOString()));
  next();
});
app.get('/', function (req, res) {
  res.json({
    "Greeting": "Hello there!!"
  });
});
/*
const publicDirectoryPath = path.join(__dirname, './public');
app.use(express.static(publicDirectoryPath));


  Route handler that sends a message/response to someone
  get() tells the server what http method to listen for
  req, res) -> call back function for when the path '/' is visited

app.get("/" , (req, res) => {res.send("Hello Express")});

app.get("/:name", (req,res) => { 
  res.send(`Welcome back to my Express Recipes, ${req.params.name}!`)
});
*/

app.listen(port, function () {
  console.log("Server is up an running on port ".concat(port, "."));
});