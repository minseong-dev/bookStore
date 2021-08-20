var express = require('express');
var router = express.Router();

const userController = require('../controller/userController')

/* 회원가입 */
router.post('/signup', userController.signup);

/* 로그인 */
router.post('/login', userController.login);