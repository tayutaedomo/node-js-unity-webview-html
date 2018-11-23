var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.get('/MyWebView.html', function(req, res, next) {
  res.render('my_web_view');
});


module.exports = router;
