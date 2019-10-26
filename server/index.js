require('dotenv').config();


const express = require('express'),
  app = express(),
  path = require('path'),
  port = process.env.port || process.env.NODE_ENV !== "production" ? 4040 : 2020,
  mongoose = require('mongoose'),
  routeMan = require('./routes/index');



//public files //static files
const publicAssets = path.join(__dirname, "../dist");
app.use(express.static(publicAssets));



//allowing resource sharing
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,PATCH,DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type');
  next();
})


//method consumers
app.use(express.json())
app.use(express.urlencoded({ extended: true }))



//passport?

//mongoose online

//server init
routeMan.serve(app, publicAssets);

app.listen(port, () => {
  console.log(`Server listening at ${port}`)
})







