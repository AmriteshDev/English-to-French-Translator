const express = require("express");
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
// Route Imports

const translator = require("./routers/french");

app.use("/api/v1", translator);


module.exports = app;