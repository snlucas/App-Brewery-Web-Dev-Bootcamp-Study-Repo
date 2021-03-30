// jshint esversion: es6

const express = require("express");
const https = require("https");

const app = express();

app.get("/", function(req, res) {
  const query = "Tokio";
  const apiKey = "bbd0a8917f02a462b67a5927e3f1529d";
  const unit = "metric";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${query}&units=${unit}&appid=${apiKey}`;

  https.get(url, function(response) {
    console.log(response.statusCode);

    response.on("data", function(data) {
      const weatherData = JSON.parse(data);
      const desc = weatherData.weather[0].description;
      const temp = weatherData.main.temp;
      const icon = weatherData.weather[0].icon;
      const imgUrl = "http://openweathermap.org/img/wn/" + icon + ".png";

      res.write(`<p>The weather is currently ${desc}.</p>`);
      res.write(`<h1>The temperature in Tokio is ${temp} degrees Celsius.</h1>`);
      res.write(`<img src="${imgUrl}" />`)
      res.send();
    });
  });
});

app.listen(3000, () => console.log("Server is running on port 3000. Hey ya!"));
