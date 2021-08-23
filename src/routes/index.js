var express = require('express');
var router = express.Router();

const mainRoute = require('./mainRoute')
const userRoute = require('./userRoute')
const bookRoute = require('./bookRoute')

router.use('/', mainRoute)
router.use('/user', userRoute)
router.use('/book', bookRoute)

module.exports = router;