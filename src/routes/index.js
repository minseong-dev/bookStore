var express = require('express');
var router = express.Router();

const mainRoute = require('./mainRoute')
const userRoute = require('./userRoute')
const bookRoute = require('./bookRoute')
const myPageRoute = require('./myPageRoute')
const orderRoute = require('./orderRoute')
const basketRoute = require('./basketRoute')

router.use('/', mainRoute)
router.use('/user', userRoute)
router.use('/book', bookRoute)
router.use('/myPage', myPageRoute)
router.use('/order', orderRoute)
router.use('/basket', basketRoute)

module.exports = router;