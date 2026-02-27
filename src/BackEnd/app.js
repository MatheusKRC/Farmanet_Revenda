/* eslint-disable no-magic-numbers */
const express = require('express');
const userRoutes = require('./api/Routes/userRoutes');
const productsRoutes = require('./api/Routes/productsRoutes');
const collectorRoutes = require('./api/Routes/collectorsRoutes');
const cors = require('cors');
const saidasRoutes = require("./api/Routes/saidasRoutes");
const estoqueRoutes = require("./api/Routes/estoqueRoutes");
const uploadRoutes = require("./api/Routes/uploadRoutes");

const app = express();

app.use(cors({
  origin: "*",
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"]
}));
app.options('*', cors());
app.use(express.json());
app.use(userRoutes);
app.use(productsRoutes)
app.use(collectorRoutes)
app.use(saidasRoutes)
app.use(estoqueRoutes)
app.use(uploadRoutes)
app.use(express.static('public'));

app.get('/coffee', (_req, res) => res.status(418).end());

module.exports = app;