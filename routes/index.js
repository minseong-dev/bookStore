var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

  const user = {
    name : "sshworld",
    weight : 100
  }

  res.render('index', { title: 'Express', user : user });

});

router.get('/login', function(req, res) {
  res.send(`<script type="text/javascript">alert("로그인 되었습니다.");
  location.href="/";</script>`)

})

module.exports = router;
