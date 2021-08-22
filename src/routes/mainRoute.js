var express = require('express');
var router = express.Router();

const userRoute = require('./userRoute')

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
  });

  router.use('/user', userRoute)

module.exports = router;