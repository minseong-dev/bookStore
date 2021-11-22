var express = require('express');
var router = express.Router();

const mainRoute = require('./mainRoute')
const userRoute = require('./userRoute')
const bookRoute = require('./bookRoute')
const myPageRoute = require('./myPageRoute')
const orderRoute = require('./orderRoute')

router.use('/', mainRoute)
router.use('/user', userRoute)
router.use('/book', bookRoute)
router.use('/myPage', myPageRoute)
router.use('/order', orderRoute)

module.exports = router;