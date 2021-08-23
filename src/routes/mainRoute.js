var express = require('express');
var router = express.Router();

const userRoute = require('./userRoute')

/* GET home page. */
router.get('/', function(req, res) {
  let sess = req.session.user_uid
  res.render('index', { sess:sess });
  });

router.use('/user', userRoute)

module.exports = router;