const router = require("express").Router();
const loginMiddleware = require("../middlewares/login");
const uploadController = require("../controller/upload");

router.route("/").post(loginMiddleware.newProduct, uploadController);
router.route("imageLookup").post((req, res) => {
  console.log(`initiate file lookup!`);
});
module.exports = router;
