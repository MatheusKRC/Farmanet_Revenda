const { Router } = require('express');
const estoqueControllers = require('../Controllers/estoqueControllers');

const estoqueRoutes = Router();

estoqueRoutes.get('/estoques', estoqueControllers.getAll);
estoqueRoutes.post('/estoque', estoqueControllers.getEstoqueByCod);
estoqueRoutes.post('/estoques', estoqueControllers.postEstoque);
estoqueRoutes.patch('/estoque', estoqueControllers.patchEstoque)

module.exports = estoqueRoutes;