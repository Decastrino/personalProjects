'use strict';

// Instantiating the Express application
const { strict } = require("assert");
const express = require("express");
const path = require("path");

const app = express(); // ----> Instance of Express server declaared at the top

const port = process.env.PORT || 5000;

// Middleware function that takes in req, res, and next as args.
app.use((req, res, next) => {
  
  //console.log(req.method, req.path);
  const { method, path } = req;
  console.log(`New request to: ${method} ${path} at ${new Date().toISOString()}`);
  next();
});

app.get('/', (req,res) => {
  res.json({
    "Greeting" : "Hello there!!"
  })
})
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




app.listen(port, () => {
  console.log(`Server is up an running on port ${port}.`);
});