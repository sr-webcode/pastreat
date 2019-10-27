const adminAcess = require('./adminAccess');
const adminPanel = require('./adminPanel');

exports.serve = (app, publicAssets) => {

  app.use('/adminAccess', adminAcess)
  app.use('/adminDash', adminPanel)

  if (process.env.NODE_ENV !== "development") {
    app.use("*", (req, res) => {
      res.sendFile(publicAssets + "/index.html")
    })
  }

}