const express = require("express"); // importing express module
// logging middleware for express, morgan
const morgan = require("morgan"); // importing morgan module
const fs = require("fs"); // importing fs module
const path = require("path"); // importing path module
// app = express functionality
const app = express(); // to config to web server

/*
write stream (in append mode)
log.txt file is created in root dir
 */
const accessLogStream = fs.createWriteStream(path.join(__dirname, "log.txt"), {
  flags: "a",
});

// invoke morgan middleware, logger
// 'common' logging: time, method/path, and status code
// 'combined' logging
app.use(morgan("combined", { stream: accessLogStream }));

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
