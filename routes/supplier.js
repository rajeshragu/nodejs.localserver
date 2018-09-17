var express = require('express');
var router = express.Router();
var cors = require('cors');
var searchResult = require('../json/search.json');

router.post('/', cors(), function (req, res, next) {
});

router.get('/search', cors(), function (req, res, next) {
  res.send(searchResult);
});

module.exports = router;
