const express = require("express"); // importing express module
// logging middleware for express, morgan
const morgan = require("morgan"); // importing morgan module
const fs = require("fs"); // importing fs module
const path = require("path"); // importing path module
const bodyParser = require("body-parser"); // importing body-parser module
const uuid = require("uuid"); // importing uuid module, unique id

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
app.use(express.static("public")); // send many static files
app.use(bodyParser.json()); // middleware that allows you to access the body of a req through 'req.body'

let MCUmovies = [
  {
    title: "Iron Man",
    directors: {
      name: "Jon Favreau",
      dob: "Oct 19, 1966",
      synopsis:
        "Actor, producer, writer and director Jon Favreau hit unlikely pay dirt when 'Swinger' (1996), his low-budget, autobiographical indie about struggling young actors, turned he and co-star/real-life best friend Vince Vaughn into hot property seemingly overnight. Favreau parlayed his rising profile into a number of supporting big-screen roles as cynical side men, but he was more anxious to get behind the camera and direct bigger features.",
    },
    genres: ["Action", "Adventure", "Sci-Fi", "Fantasy"],
  },
  {
    title: "The Incredible Hulk",
    directors: {
      name: "Louis Leterrier",
      dob: "Jun 17, 1973",
      synopsis:
        'Though Parisian director Louis Leterrier has only been making motion pictures for less than a decade, each production has been an action-packed blockbuster hit. He grew up in a film oriented family with a director father and costume designer mother. After studying film at the prestigious Tisch School of the Arts at NYU, Leterrier returned to his homeland and found himself as a production assistant for "Alien Resurrection."',
    },
    genres: ["Action", "Adventure", "Sci-Fi", "Fantasy"],
  },
  {
    title: "Iron Man 2",
    directors: {
      name: "Jon Favreau",
      dob: "Oct 19, 1966",
      synopsis:
        "Actor, producer, writer and director Jon Favreau hit unlikely pay dirt when 'Swinger' (1996), his low-budget, autobiographical indie about struggling young actors, turned he and co-star/real-life best friend Vince Vaughn into hot property seemingly overnight. Favreau parlayed his rising profile into a number of supporting big-screen roles as cynical side men, but he was more anxious to get behind the camera and direct bigger features.",
    },
    genres: ["Action", "Adventure", "Sci-Fi", "Fantasy"],
  },
];

// GET requests

// Gets all users
/* insert http req */

// Gets user by user ID
/* insert http req */

// Gets the list of marvel movies
app.get("/movies", (req, res) => {
  res.json(MCUmovies);
});

// Gets movie by title
app.get("/movies/:movieName", (req, res) => {
  res.json(
    MCUmovies.find((movie) => {
      {
        return movie.title === req.params.title;
      }
    })
  );
});

// Gets data of director(s)
app.get("/movies/directors/:directorName", (req, res) => {
  res.json(
    MCUmovies.find((movie) => {
      {
        return movie.directors.directorsName === req.params.name;
      }
    })
  );
});

//Gets data of genres
app.get("/movies/genres/:genreName", (req, res) => {
  res.json(
    MCUmovies.find((movie) => {
      {
        return movie.genres === req.params.name;
      }
    })
  );
});

// POST requests

// Posts updated information to users account: username, password, email, birthday
/* insert http req */

// Posts movies to users favorites list
app.post("/movies/:movieID", (req, res) => {
  res.send("favorite movies");
});

// DELETE requests

// Deletes movies from users favorites list
/* insert http req */

// Delets users account permanently
/* insert http req */

// error-handling middleware, handles any errors
app.use((err, req, res, next) => {
  console.err(err.stack); // logs error in terminal through err.stack
  res.status(500).send("Something broke!");
});

// listen for requests
app.listen(8080, () => {
  console.log("Listening on Port 8080");
});
