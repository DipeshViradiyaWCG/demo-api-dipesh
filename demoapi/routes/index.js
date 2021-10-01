var express = require('express');
var router = express.Router();

const product_model = require("../models/product_model");


/* GET home page. */
router.get('/api', function(req, res, next) {
  res.json({msg : "hello api user..."});
});

router.get('/test', function(req, res, next) {
  product_model.find().lean().then((data) => {
    res.json(data);
  }).catch((err) => {
      throw err;
  });
});

module.exports = router;
