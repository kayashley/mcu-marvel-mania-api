const mongoose = require("mongoose"); // importing mongoose module
const bcrypt = require("bcrypt"); // importing bcrypt module

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
  Directors: [{ type: mongoose.Schema.Types.ObjectId, ref: "Director" }],
  Genres: [{ type: mongoose.Schema.Types.ObjectId, ref: "Genre" }],
  Image: { type: String, required: true },
});

// directorSchema dictates format for collection
let directorSchema = mongoose.Schema({
  Name: { type: String, required: true },
  Birthyear: Date,
  Bio: { type: String, required: true },
});

// genreSchema - dictates format for collection
let genreSchema = mongoose.Schema({
  Name: { type: String, required: true },
  Description: { type: String, required: true },
});

// userSchema dictates format for collection
let userSchema = mongoose.Schema({
  Username: { type: String, required: true },
  Password: { type: String, required: true },
  Email: { type: String, required: true },
  Birthday: Date,
  FavoriteMovies: [{ type: mongoose.Schema.Types.ObjectId, ref: "Movie" }],
});

// hashes submitted password
userSchema.statics.hashPassword = (password) => {
  return bcrypt.hashSync(password, 10);
};

// validates submitted password with hashed password
userSchema.methods.validatePassword = function (password) {
  return bcrypt.compare(password, this.Password);
};

let Movie = mongoose.model("Movie", movieSchema); // creates db.movies within MongoDB
let User = mongoose.model("User", userSchema); // creates db.users within MongoDB
let Director = mongoose.model("Director", directorSchema); // creates db.directors within MongoDB
let Genre = mongoose.model("Genre", genreSchema); // creates db.genres within MongoDB

module.exports.Movie = Movie; // exports model, Movie
module.exports.User = User; // exports model, User
module.exports.Director = Director; // exports model, Director
module.exports.Genre = Genre; // exports model, Genre
