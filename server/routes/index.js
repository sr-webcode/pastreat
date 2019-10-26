const adminAcess = require('./adminAccess');


exports.serve = (app, publicAssets) => {

  app.use('/adminAccess', adminAcess)

  if (process.env.NODE_ENV !== "development") {
    app.use("*", (req, res) => {
      res.sendFile(publicAssets + "/index.html")
    })
  }

}