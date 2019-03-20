const PORT = process.env.PORT || 3000;
const express = require("express");
const app = express();
const htmlRouter = require("./app/routing/htmlroutes");
const apiRouter = require("./app/routing/apiroutes");

app.use(htmlRouter);
app.use(apiRouter);
app.use(express.static("./app"));

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
