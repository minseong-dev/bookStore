var express = require('express');
var router = express.Router();

const mainRoute = require('./mainRoute')
const userRoute = require('./userRoute')


router.use('/', mainRoute)
router.use('/user', userRoute)

module.exports = router;