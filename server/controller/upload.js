const { validationResult } = require("express-validator");
const prodModel = require("../models/product.models");
const formidable = require("formidable");
const path = require("path");

module.exports = (req, res) => {
  //validation errors first
  const hasErrors = validationResult(req);
  if (!hasErrors.isEmpty()) return res.status(422).json({ hasErrors });

  // const { prodname, prodcategory, proddesc, imageFile } = req.body;

  console.log(req.body);

  // const newRecord = new prodModel({
  //   prodName: prodname,
  //   prodCategory: prodcategory,
  //   prodDesc: proddesc
  // });

  // newRecord
  //   .save()
  //   .then(() => {
  //     return res.status(200).send("ook gooodjob!");
  //   })
  //   .catch(err => {
  //     return res.status(500).send(err);
  //   });
};
