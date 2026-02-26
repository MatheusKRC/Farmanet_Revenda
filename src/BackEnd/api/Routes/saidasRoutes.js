const { Router } = require('express');
const saidasControllers = require('../Controllers/saidasControllers');

const saidasRoutes = Router();

saidasRoutes.get('/saidas', saidasControllers.getAll);
saidasRoutes.post('/saida', saidasControllers.getSaidasByCod);
saidasRoutes.post('/saidas', saidasControllers.postSaidas);
saidasRoutes.patch('/saida', saidasControllers.patchSaidas);
saidasRoutes.delete('/saidas', saidasControllers.destroySaidas)

module.exports = saidasRoutes;