const mongoose = require("mongoose"); // importing mongoose module

// movieSchema dictates format for collection
let movieSchema = mongoose.Schema({
  Name: { type: String, required: true },
  Rating: { type: String, required: true },
  ReleaseDate: Date,
  Runtime: { type: String, required: true },
  Synopsis: { type: String, required: true },
  Directors: {
    Name: String,
    Birthyear: Date,
    Bio: String,
  },
  Directors: [String], // unsure if this will cause an error, some collections follow a diff format
  Genres: [String],
  Image: { type: String, required: true },
});

// userSchema dictates format for collection
let userSchema = mongoose.Schema({
  Username: { type: String, required: true },
  Password: { type: String, required: true },
  Email: { type: String, required: true },
  Birthday: { type: Date, required: true },
  FavoriteMovies: [{ type: mongoose.Schema.Types.ObjectId, ref: "Movie" }],
});

let Movie = mongoose.model("Movie", movieSchema); // creates db.movies within MongoDB
let User = mongoose.model("User", userSchema); // creates db.users within MongoDB

module.exports.Movie = Movie; // exports model, Movie
module.exports.User = User; // exports model, User
