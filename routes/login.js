var express = require('express');
var router = express.Router();

var logincontroller = require('../controllers/logincontroller');

console.log("helloooo");
router.post('/',logincontroller.authenticate);

module.exports = router;
