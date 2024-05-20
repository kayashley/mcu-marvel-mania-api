const express = require("express"); // importing express module
// logging middleware for express, morgan
const morgan = require("morgan"); // importing morgan module
// app = express functionality
const app = express(); // to config to web server

// invoke morgan middleware
app.use(morgan("common")); // common loggin from morgan: time, method/path, and status code

let MCUmovies = [
  {
    title: "Iron Man",
    directors: "Jon Favreau",
  },
  {
    title: "The Incredible Hulk",
    directors: "Louis Leterrier",
  },
  {
    title: "Iron Man 2",
    directors: "Jon Favreau",
  },
];

// GET requests
app.get("/", (req, res) => {
  res.send("Welcome to the MCU movie app");
});

app.get("/movies", (req, res) => {
  res.sendFile("public/movies.html", { root: __dirname });
});

app.get("/MCUmovies", (req, res) => {
  res.json(MCUmovies);
});

// listen for requests
app.listen(8080, () => {
  console.log("Listening on Port 8080");
});
