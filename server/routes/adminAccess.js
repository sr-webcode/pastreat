const router = require('express').Router();
const loginMiddleware = require('../middlewares/login')
const loginController = require('../controller/login')

router.route("/")
  .post(loginMiddleware.admin, loginController)


module.exports = router;

