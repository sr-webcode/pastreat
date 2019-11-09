require("dotenv").config();
require('isomorphic-fetch');


const express = require("express"),
  app = express(),
  path = require("path"),
  port =
    process.env.port || process.env.NODE_ENV !== "production" ? 4040 : 2020,
  mongoose = require("mongoose"),
  routeMan = require("./routes/index"),
  passport = require("passport"),
  session = require("express-session"),
  memstore = require("memorystore")(session);

//public files //static files
const publicAssets = path.join(__dirname, "../dist");
app.use(express.static(publicAssets));

//allowing resource sharing
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET,POST,PUT,PATCH,DELETE");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With, Content-Type"
  );
  next();
});

//method consumers
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true, parameterLimit: 50000 }));

//passport?
require("./config/passport")(passport);

app.use(
  session({
    secret: "fiberEnriched",
    resave: true,
    saveUninitialized: true,
    cookie: { maxAge: 86400000 },
    store: new memstore({ checkPeriod: 86400000 })
  })
);

app.use(passport.initialize());
app.use(passport.session());
app.use((req, res, next) => {
  req.passport = passport;
  next();
});

//mongoose dev local for testing
mongoose
  .connect(process.env.DBCON, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
  })
  .then(() => {
    console.log(`connected to db!`);
  })
  .catch(err => {
    console.log(err);
  });

//server init
routeMan.serve(app, publicAssets);

app.listen(port, () => {
  console.log(`Server listening at ${port}`);
});
