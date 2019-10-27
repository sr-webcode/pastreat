const localStrat = require('passport-local').Strategy,
  SECRET_USER = process.env.SECRET_USER,
  SECRET_PASS = process.env.SECRET_PASS;

module.exports = (passport) => {

  passport.serializeUser((user, done) => {
    return done(null, user)
  })

  passport.deserializeUser((user, done) => {
    return done(null, user)
  })

  passport.use('adminLogin', new localStrat((username, password, done) => {

    if (username !== SECRET_USER) {
      return done(null, false, { param: 'username', msg: 'invalid admin username!' })
    } else if (password !== SECRET_PASS) {
      return done(null, false, { param: 'password', msg: 'invalid admin password!' })
    }
    return done(null, username)
  }))

}