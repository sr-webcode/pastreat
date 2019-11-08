const adminAcess = require("./adminAccess");
const adminDash = require("./adminDash");
const adminUpload = require("./adminUpload");

exports.serve = (app, publicAssets) => {
  app.use("/adminAccess", adminAcess);
  app.use("/adminDash", adminDash);
  app.use("/upload", adminUpload);

  if (process.env.NODE_ENV !== "development") {
    app.use("*", (req, res) => {
      res.sendFile(publicAssets + "/index.html");
    });
  }
};
