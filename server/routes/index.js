exports.serve = (app, publicAssets) => {


  app.use("*", (req, res) => {
    res.sendFile(publicAssets + "/index.html")
  })

}