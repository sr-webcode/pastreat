const fs = require("fs");

const routeManager = app => {
  app.get("/", (req, res) => {
    res.end("welcome to the home page!");
  });
  app.get("/about", (req, res) => {
    res.end("the about page!");
  });

  //404 page
  app.get("*", (req, res) => {
    res.status(404).send("page not found!");
  });
};

module.exports = routeManager;
