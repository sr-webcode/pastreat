const { validationResult } = require("express-validator");
const prodModel = require("../models/product.models");
const { Dropbox } = require('dropbox')

module.exports = (req, res) => {

  const hasErrors = validationResult(req);
  if (!hasErrors.isEmpty()) return res.status(422).json({ hasErrors });
  const { prodname, prodcategory, proddesc, previewFile, previewOriginName } = req.body;
  const uploadBufferData = Buffer.from(previewFile.split("data:image/jpeg;base64,")[1], 'base64');

  const DBX = new Dropbox({
    fetch: fetch,
    accessToken: process.env.ACCESS_TOKEN
  })

  DBX.filesUpload({ path: `/${prodcategory}/${previewOriginName}`, contents: uploadBufferData })
    .then(() => {
      const newRecord = new prodModel({
        prodName: prodname,
        prodCategory: prodcategory,
        prodDesc: proddesc,
        prodOrigin: `/${prodcategory}/${previewOriginName}`,
      });
      newRecord
        .save()
        .then(() => {
          return res.status(200).json(`${prodname} record added!`);
        })
        .catch(err => {
          return res.status(500).send(err);
        });
    })
    .catch((err) => {
      console.log(err)
    })
};
