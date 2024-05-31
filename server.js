const express = require("express"); // importing express module
// logging middleware for express, morgan
const morgan = require("morgan"); // importing morgan module
const fs = require("fs"); // importing fs module
const path = require("path"); // importing path module
const bodyParser = require("body-parser"); // importing body-parser module
const uuid = require("uuid"); // importing uuid module, unique id

// integrating mongoose with REST API
const mongoose = require("mongoose"); // importing mongoose module
const Models = require("./models.js"); // importing models.js file
// importing mongoose models
const Movies = Models.Movie;
const Users = Models.User;

// Mongoose connects to db, "MCUmarvel-movie-api-db"
mongoose.connect("mongodb://127.0.0.1:27017/MCUmarvel-movie-api-db", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// app = express functionality
const app = express(); // to config to web server
app.use(express.urlencoded({ extended: true })); // required for running express above V4.16

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

// GET route for the root URL
app.get("/", (req, res) => {
  res.send("Welcome to MCU marvel movie api!");
});

// Gets all users
/* insert http req */

app.get("/users", async (req, res) => {
  // res.json(Users); // User model

  Users.find()
    .then((users) => {
      res.status(201).json(users);
    })
    .catch((error) => {
      console.log(error);
      res.status(500).send("Error: " + error);
    });
});

// Gets user by user ID
/* insert http req */

// Gets list of marvel movies
// app.get("/movies", async (req, res) => {
//   res.send("List of movies");
// });

app.get("/movies", async (req, res) => {
  Movies.find()
    .then((movies) => {
      res.status(201).json(movies);
    })
    .catch((error) => {
      console.log(error);
      res.status(500).send("Error: " + error);
    });
});

// Gets movie by title
app.get("/movies/:movieName", async (req, res) => {
  res.json(
    Movies.find((movie) => {
      {
        return movie.Name === req.params.Name;
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

app.post("/users", async (req, res) => {
  await Users.findOne({ Username: req.body.Username }) // checks to see if user already exists
    .then((user) => {
      if (user) {
        return res.status(400).send(req.body.Username + "already exists");
      } else {
        Users.create({
          Username: req.body.Username,
          Password: req.body.Password,
          Email: req.body.Email,
          Birthday: req.body.Birthday,
        })
          .then((user) => {
            res.status(201).json(user);
          })
          .catch((error) => {
            console.log(error);
            res.status(500).send("Error: " + error);
          });
      }
    })
    .catch((error) => {
      console.log(error);
      res.status(500).send("Error: " + error);
    });
});

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
