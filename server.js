const PORT = process.env.PORT || 3000;
const express = require('express')
const path = require('path')
const app = express();
const htmlRouter = require('./app/routing/htmlroutes')

app.use(htmlRouter);

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });


