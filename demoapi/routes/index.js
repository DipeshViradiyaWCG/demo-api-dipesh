var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/api', function(req, res, next) {
  res.json({msg : "hello api user..."});
});

module.exports = router;
