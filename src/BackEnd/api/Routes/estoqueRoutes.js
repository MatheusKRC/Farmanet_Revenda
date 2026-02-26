const { Router } = require('express');
const estoqueControllers = require('../Controllers/estoqueControllers')

const estoqueRoutes = Router();

estoqueRoutes.get('/estoque', estoqueControllers.getAll);
estoqueRoutes.post('/estoque', estoqueControllers.getEstoqueByCod);
estoqueRoutes.post('/estoques', estoqueControllers.postEstoque);
estoqueRoutes.patch('/estoque', estoqueControllers.patchEstoque);
estoqueRoutes.delete('/estoque', estoqueControllers.destroyEstoque)

module.exports = estoqueRoutes;