var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.get('/MyWebView.html', function(req, res, next) {
  res.render('my_web_view');
});

router.get('/webview_callback.html', function(req, res, next) {
  res.render('webview_callback');
});


module.exports = router;
