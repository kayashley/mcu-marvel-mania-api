const passport = require("passport"); // importing passport library
const LocalStrategy = require("passport-local").Strategy; // importing passport strategy auth
const Models = require("./models.js"); // importing local models js
const passportJWT = require("passport-jwt"); // importing passport strategy for jwt auth

let Users = Models.User, // model user from db
  JWTStrategy = passportJWT.Strategy,
  ExtractJWT = passportJWT.ExtractJwt;

/* 
-- LocalStrategy: first passport strategy --
(defines basic http auth for login req)
- takes username & password and authenticates 
*/
passport.use(
  new LocalStrategy(
    {
      usernameField: "Username",
      passwordField: "Password",
    },
    async (username, password, callback) => {
      console.log(`${username}, ${password}`);
      await Users.findOne({ Username: username }) // checks to see if username matches within db
        .then((user) => {
          // if username does not match
          if (!user) {
            console.log("Incorrect username");
            return callback(null, false, {
              message: "Incorrect username or password.",
            });
          }
          // if username does match
          console.log("finished");
          return callback(null, user);
        })
        .catch((error) => {
          if (error) {
            console.log(error);
            return callback(error);
          }
        });
    }
  )
);

/* 
-- JWTStrategy: second passport strategy --
(auth users based on the jwt submitted along with reqs)
- jwt is extracted from the header and referred to as the "bearer token"
- signature then verifies that the sender of the jwt was from the client and the token hasn't been altered 
*/
passport.use(
  new JWTStrategy(
    {
      jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(), // jwt is extracted from header of http req, called the bearer token
      secretOrKey: "jwt-key", // to verify signature of jwt
    },
    async (jwtPayload, callback) => {
      return await Users.findById(jwtPayload._id) // searches db to find user by id
        .then((user) => {
          return callback(null, user);
        })
        .catch((error) => {
          return callback, error;
        });
    }
  )
);
