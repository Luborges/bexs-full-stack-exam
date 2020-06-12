const express = require('express');
const middleware = require('./middlewares');

const UserController = require('./controllers/UserController');

const routes = express.Router();

const userController = new UserController();

routes.post('/user', userController.create);
routes.post('/login', userController.login);


routes.get('/logout', (req, res) => {
    req.session.destroy();
    return res.status(200);
});

module.exports = routes;