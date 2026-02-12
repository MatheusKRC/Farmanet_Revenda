const { Router } = require('express');
const collectorControllers = require('../Controllers/collectorsControllers');

const collectorRoutes = Router();

collectorRoutes.get('/collectors', collectorControllers.getAllCollectors);

module.exports = collectorRoutes;
