let express = require("express");
let app = express();
let port = 3000;
let appRoute = require("./app/routes/index");
let { Merchants, Products } = require("./models/index");

app.use(express.json());
app.use("/", appRoute);

app.listen(port, () => {
  console.log("Example app listen to port 3000");
});
