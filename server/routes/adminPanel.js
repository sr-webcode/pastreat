const router = require('express').Router();

router.route('/')
  .get((req, res) => {
    console.log(req.isAuthenticated());
    return res.status(200).send(req.isAuthenticated())
  })
module.exports = router;
