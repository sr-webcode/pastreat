const app = require("express")();
const PORT = process.env.PORT || 4040;
const { routeManager } = require("./helper/index");

routeManager(app);

app.listen(PORT);
