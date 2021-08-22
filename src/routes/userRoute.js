var express = require('express');
var router = express.Router();

const userController = require('../controllers/userController')

/* 회원가입 */
router.post('/signup', userController.signup);

/* 로그인 */
router.post('/signin', userController.signin);

module.exports = router;