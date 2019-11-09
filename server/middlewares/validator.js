const { check } = require("express-validator");

module.exports = {
  admin: [
    check("username")
      .not()
      .isEmpty()
      .withMessage("username field cannot empty!"),
    check("password")
      .not()
      .isEmpty()
      .withMessage("password field cannot empty!")
  ],
  newProduct: [
    check("prodname")
      .not()
      .isEmpty()
      .withMessage("name field cannot empty!"),
    check("prodcategory")
      .not()
      .isEmpty()
      .withMessage("category field cannot empty!"),
    check("proddesc")
      .not()
      .isEmpty()
      .withMessage("decription field cannot empty!")
      .isLength({
        min: 10
      })
      .withMessage("description should be 10 characters or more"),
    check('previewOriginName')
      .custom((val) => {
        return /\.(jpe?g|png|gif|svg|ico|bmp)$/ig.test(val)
      }).withMessage('Invalid image file!')
  ],
  regularUser: [],
  newUser: []
};
