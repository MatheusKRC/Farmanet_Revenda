const { Router } = require('express');
const productsControllers = require('../Controllers/productsControllers');

const productsRoutes = Router();

productsRoutes.get('/products', productsControllers.getAll);
productsRoutes.post('/product', productsControllers.getProductByCod);
productsRoutes.post('/products', productsControllers.postProducts);
productsRoutes.patch('/product', productsControllers.patchProducts)

module.exports = productsRoutes;