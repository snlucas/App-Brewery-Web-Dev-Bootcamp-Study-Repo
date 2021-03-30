// jshint esversion: es6

const bodyParser = require("body-parser");
const express = require("express");

const app = express();

app.listen(3000, () => console.log("Server running on port 3000. Hey ya!"));
