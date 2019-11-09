const router = require("express").Router();
const validator = require("../middlewares/validator");
const uploadController = require("../controller/upload");

router.route("/").post(validator.newProduct, uploadController);
module.exports = router;
