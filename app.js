const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { logging } = require('lib/middleware')

const routes = require('./routes/index');

const app = express();
app.use(cors({ origin: '*' }));

app.use(bodyParser.json());

app.use(logging);

app.use('/', routes);

module.exports = app;
