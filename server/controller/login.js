const { validationResult } = require("express-validator");

module.exports = (req, res, next) => {
  //instance initialized passport

  const passport = req.passport;

  const hasErrors = validationResult(req);
  if (!hasErrors.isEmpty()) return res.status(401).send({ hasErrors });

  //passport authentication here, 1st level was express validator
  passport.authenticate("adminLogin", (err, user, info) => {
    if (info)
      return res.status(401).json({
        hasErrors: {
          errors: [info]
        }
      });

    req.logIn(user, function(err) {
      if (err) return res.status(403).send("failed to serialize user");
      return res.status(200).send(user);
    });
  })(req, res, next);
};
