//jshint esversion:6

const express = require("express");

const app = express();

app.get("/", function(req, res) {
  res.send("<h1>Hello, World!</h1>");
});

app.get("/contact", function(req, res) {
  res.send("Contact me at: lucas.lambda.101@gmail.com");
});

app.get("/hobbies", function(req, res) {
  res.send("<ul><li>Play games</li><li>Listen music</li></ul>");
});

app.get("/about", function(req, res) {
  res.send("Hi, I am the Lucas");
});

app.listen(3000, () => console.log("Server running on port 3000.\nHey Ya."));
