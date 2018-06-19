
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const morgan = require('morgan');

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(morgan('dev'));

// Route
const routes = require('./routes');
app.use('/', routes);

module.exports = app;