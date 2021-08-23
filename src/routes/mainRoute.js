var express = require('express');
var router = express.Router();

const bookController = require('../controllers/bookController')

/* GET home page. */
// router.get('/', function(req, res) {
//   let sess = req.session.user_uid
//   res.render('index', { page:'./book/bookList', sess:sess });
//   });

router.get('/', bookController.bookList);

module.exports = router;