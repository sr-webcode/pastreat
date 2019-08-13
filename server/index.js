const app = require('express')();
const PORT = process.env.PORT || 4040;


app.get("/", (req, res) => {
  res.end('welcome to the home page broddah!')
})

app.listen(PORT);

