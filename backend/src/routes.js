const express = require('express');
const middleware = require('./middlewares');

const UserController = require('./controllers/UserController');
const QuestionController = require('./controllers/QuestionController');
const AnswerController = require('./controllers/AnswerController');

const routes = express.Router();

const userController = new UserController();
const questionController = new QuestionController();
const answerController = new AnswerController();

// User
routes.post('/user', userController.create);
routes.post('/login', userController.login);

// Question
routes.get('/questions', middleware, questionController.index);
routes.get('/questions-count', middleware, questionController.total);
routes.post('/questions', middleware, questionController.create);

// Answer
routes.get('/answers', middleware, answerController.find);
routes.post('/answers', middleware, answerController.create);

routes.get('/logout', (req, res) => {
    req.session.destroy();
    return res.status(200);
});

module.exports = routes;