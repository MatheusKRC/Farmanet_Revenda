const { Router } = require('express');
const userControllers = require('../Controllers/userControllers');

const userRoutes = Router();

userRoutes.get('/users', userControllers.getAll);
userRoutes.post('/login', userControllers.login)

module.exports = userRoutes;
