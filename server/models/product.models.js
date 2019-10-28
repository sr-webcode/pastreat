const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProdSchema = new Schema({
  prodName: {
    type: String
  },
  prodCategory: {
    type: String
  },
  prodDesc: {
    type: String
  },
  prodImage: {
    type: String,
    default: "category_name"
  },
  dateAdded: {
    type: Date,
    default: new Date()
  }
});

const ProdModel = mongoose.model("productList", ProdSchema);
module.exports = ProdModel;
