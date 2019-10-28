const { validationResult } = require("express-validator");
const prodModel = require("../models/product.models");

module.exports = (req, res) => {
  //validation errors first
  const hasErrors = validationResult(req);
  if (!hasErrors.isEmpty()) return res.status(422).json({ hasErrors });

  //add the image record in db then upload the image which should come from multer multi part data

  const { prodname, prodcategory, proddesc } = req.body;
  //save in database first
  const newRecord = new prodModel({
    prodName: prodname,
    prodCategory: prodcategory,
    prodDesc: proddesc
  });
  newRecord
    .save()
    .then(() => {
      return res.status(200).send("ook gooodjob!");
    })
    .catch(err => {
      return res.status(500).send(err);
    });
};
