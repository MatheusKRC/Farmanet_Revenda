/* eslint-disable no-magic-numbers */
const multer = require("multer");
const { spawn } = require("child_process");
const express = require('express');
const userRoutes = require('./api/Routes/userRoutes');
const productsRoutes = require('./api/Routes/productsRoutes');
const collectorRoutes = require('./api/Routes/collectorsRoutes');
const cors = require('cors');
const saidasRoutes = require("./api/Routes/saidasRoutes");
const estoqueRoutes = require("./api/Routes/estoqueRoutes");

const app = express();
const upload = multer();


app.use(cors());
app.use(express.json());
app.use(userRoutes);
app.use(productsRoutes)
app.use(collectorRoutes)
app.use(saidasRoutes)
app.use(estoqueRoutes)
app.use(express.static('public'));
app.post('/upload', upload.single("file"), (req, res) => {
  console.log("req.file:", req.file);
  console.log("req.body:", req.body);
  const python = spawn("/home/matheuskrc/Projects/My_Projects/farmanet-revenda/.venv/bin/python", [
    "/home/matheuskrc/Projects/My_Projects/farmanet-revenda/src/BackEnd/RelatorioProdutos.py"
  ]);
  const htmlContent = req.file.buffer.toString("utf-8");


  let result = '';
  let error = '';

  python.stdout.on('data', (data) => {
    result += data.toString();
  });

  python.stderr.on('data', (data) => {
    error += data.toString();
  });

  python.on('close', (code) => {
    if (code !== 0) {
      console.error('Erro Python:', error);
      return res.status(500).json({ error });
    }

    try {
      const produtos = JSON.parse(result);
      res.json({
        success: true,
        data: produtos
      });
    } catch (err) {
      res.status(500).json({
        success: false,
        data: [],
        error: errorMessage
      });
    }
  });

  if (!req.file) {
    return res.status(400).json({ error: "Arquivo não enviado" });
  }
  
  python.stdin.write(htmlContent);
  python.stdin.end();
});

app.get('/coffee', (_req, res) => res.status(418).end());

module.exports = app;