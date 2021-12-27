"use strict"
const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require("dotenv");
const morgan = require("morgan");
const app = express();
const accessLogStream = require("./src/config/log");
dotenv.config();
const home = require('./src/routes/home');
const logger = require("./src/config/logger");

app.set('views', './src/views');
app.set('view engine', 'ejs');
app.use(express.static(`${__dirname}/src/public`));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use(morgan("common", { stream: accessLogStream }));

app.use('/', home);
module.exports = app;