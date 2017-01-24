'use strict';

const
  passport    = require('passport'),
  passportJwt = require('passport-jwt'),
  jwt         = require('jsonwebtoken'),
  JwtStrategy = passportJwt.Strategy,
  ExtractJwt  = passportJwt.ExtractJwt,
  jwtOptions  = {
      jwtFromRequest: ExtractJwt.fromAuthHeader(),
      secretOrKey   : process.env.SECRET || '!&^pzmer+++jds>>>hasj<<<<}[42]--#@%`1!+'
  };

let strategy = new JwtStrategy(jwtOptions);

passport.use(strategy);

module.exports = passport;