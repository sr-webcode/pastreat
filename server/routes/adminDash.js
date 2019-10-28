const router = require("express").Router();

router.route("/").get((req, res) => {
  // return res.status(200).send(req.isAuthenticated())
  return res.status(200).send(true); //for dev only
  //remember to unset this at some point int time! specially if for production
});


router.route("/logout").get((req, res) => {
  //logout function -- destroy session
  req.session.destroy(err => {
    if (err) return console.log(err);
    return res.status(200).send(true);
  });
});


module.exports = router;
