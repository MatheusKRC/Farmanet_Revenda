const { Router } = require('express');
const { spawn } = require("child_process");
const multer = require("multer");

const upload = multer();
const uploadRoutes = Router();


uploadRoutes.post('/uploadestoque', upload.single("file"), (req, res) => {
  
    console.log("bateu na rota uploadestoque");
    console.log("req.file:", req.file);
    console.log("req.body:", req.body);
    const python = spawn("python3", [
      "../../../../Relatorio/RelatorioEstoque.py"
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
        });
      }
    });
  
    if (!req.file) {
      return res.status(400).json({ error: "Arquivo não enviado" });
    }
    
    python.stdin.write(htmlContent);
    python.stdin.end();
  });

uploadRoutes.post('/uploadsaidas', upload.single("file"), (req, res) => {
    console.log("req.file:", req.file);
    console.log("req.body:", req.body);
    const python = spawn("python3", [
      "../../../../Relatorio/RelatorioSaidas.py"
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
        });
      }
    });
  
    if (!req.file) {
      return res.status(400).json({ error: "Arquivo não enviado" });
    }
    
    python.stdin.write(htmlContent);
    python.stdin.end();
  });

module.exports = uploadRoutes