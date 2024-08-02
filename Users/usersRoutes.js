const { Router } = require('express');
const UserController = require('./usersController');

const userController = new UserController;

const router = Router();

//saber si un array es palindromo
router.post('/newUser', userController.newUserController);


module.exports = router;