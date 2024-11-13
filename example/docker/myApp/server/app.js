require('dotenv').config();

const express = require('express');

const configExpress = require('./config/express');
const connectDB = require('./config/database');
const routes = require('./routes');

const cors = require('cors');

const app = express();
app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
  })
);
connectDB();
configExpress(app);
routes(app);

app.use('/', (req, res) => {
  res.send('Hello World from Express 🚀');
});

module.exports = app;
