const router = require('express').Router();
const loginMiddleware = require('../middlewares/login')
const loginController = require('../controller/login')


///multiple middlewares
router.route("/")
  .get((req, res) => {
    //admin page checking whether user has already logged in
    const isAuth = req.isAuthenticated();
    return res.status(200).send(isAuth);
  })
  .post(loginMiddleware.admin, loginController)


module.exports = router;

