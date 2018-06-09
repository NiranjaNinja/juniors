var express = require('express');
var router = express.Router();

var usercontroller = require('../controllers/usercontroller');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { name: req.body.name });
});

router.post('/index', usercontroller.register);

module.exports = router;
