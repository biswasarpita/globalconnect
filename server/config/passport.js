/*eslint no-undef: "error"*/
/*eslint-env node*/
const JwtStategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
const mongoose = require("mongoose");
const log = require("log");

const User = mongoose.model("users");
const config = require("./config");

const opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = config.key;

module.exports = passport => {
  passport.use(
    new JwtStategy(opts, (jwt_payload, done) => {
      User.findById(jwt_payload.id)
      .then(user=> {
        if(user){
          return done(null, user);
        }
        return done(null, false);
      })
      .catch(err => log.error (err))
    })
  );
};
