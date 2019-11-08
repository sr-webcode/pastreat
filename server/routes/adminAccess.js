const router = require("express").Router();
const loginMiddleware = require("../middlewares/login");
const loginController = require("../controller/login");

///multiple middlewares
router
  .route("/")
  .get((req, res) => {
    const isAuth = req.isAuthenticated();
    return res.status(200).send(isAuth);
  })
  .post(loginMiddleware.admin, loginController);

module.exports = router;
