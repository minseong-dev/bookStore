var express = require('express');
var router = express.Router();


const usersController = require('../controller/users')

/* 회원가입 */
router.post('/signup', usersController.signup);

/* 로그인 */
router.post('/login', usersController.login);