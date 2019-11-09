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
  prodOrigin: {
    type: String
  },
  dateAdded: {
    type: Date,
    default: new Date()
  }
});

const ProdModel = mongoose.model("items", ProdSchema);
module.exports = ProdModel;
