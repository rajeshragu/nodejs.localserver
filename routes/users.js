var express = require('express');
var router = express.Router();
var cors = require('cors');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.get('/authenticate', cors(), function (req, res, next) {  
  res.send("testuser");  
})
module.exports = router;
