var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {});
});

router.get('/frame', function(req, res, next) {
  res.render('frames/logo', {});
});

module.exports = router;
