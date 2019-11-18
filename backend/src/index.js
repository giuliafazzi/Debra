require('custom-env').env(true);
require('express-async-errors');
require('./database');
const express = require('express');
const cors = require('cors');
const routes = require('./routes');
const error = require('./middlewares/error');

const app = express();

app.use(express.json());
app.use(cors());
app.use(routes);
app.use(error);

const PORT = process.env.PORT || 3000;
app.listen(PORT);