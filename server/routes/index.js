const adminAcess = require("./adminAccess");
const adminDash = require("./adminDash");
const adminUpload = require("./adminUpload");
const products = require('./getProducts');


exports.serve = (app, publicAssets) => {
  app.use("/adminAccess", adminAcess);
  app.use("/adminDash", adminDash);
  app.use("/upload", adminUpload);
  app.use('/products', products)

  if (process.env.NODE_ENV !== "development") {
    app.use("*", (req, res) => {
      res.sendFile(publicAssets + "/index.html");
    });
  }
};
