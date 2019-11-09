const router = require("express").Router();
const validator = require("../middlewares/validator");
const loginController = require("../controller/login");

///multiple middlewares
router
  .route("/")
  .get((req, res) => {
    const isAuth = req.isAuthenticated();
    return res.status(200).send(isAuth);
  })
  .post(validator.admin, loginController);

module.exports = router;
