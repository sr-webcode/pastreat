const router = require("express").Router();
const loginMiddleware = require("../middlewares/login");
const uploadController = require("../controller/upload");

router.route("/").post(loginMiddleware.newProduct, uploadController);
module.exports = router;
