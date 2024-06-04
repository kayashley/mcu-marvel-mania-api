/* (auth.js)
-- login endpoint --
- authenticate login requests using basic http auth
- also generates a jwt for the user 
*/

const jwtSecret = "jwt-key"; // same key used in passport.js for jwtStrategy
const jwt = require("jsonwebtoken"); // importing jwt library
passport = require("passport"); // importing passport library

require("./passport.js"); // local passport file

let generateJWTToken = (user) => {
  return (
    jwt.sign(user, jwtSecret),
    {
      subject: user.Username, // username encoded in jwt
      expiresIn: "7d", // specifies expiration - 7 days
      algorithm: "HS256", // algorithm to "sign" or encode the values of jwt
    }
  );
};

// POST Login
module.exports = (router) => {
  router.post("./login", (req, res) => {
    passport.authenticate("local", { session: false }, (error, user, info) => {
      // if error OR user is incorrect
      if (error || !user) {
        return res.status(400).json({
          message: "Something went wrong.",
          user: user,
        });
      }
      req.login(user, { session: false }, (error) => {
        if (error) {
          res.send(error);
        }
        // user is authenticated with jwt
        let token = generateJWTToken(user.toJSON());
        return res.json({ user, token });
      });
    })(req, res);
  });
};
