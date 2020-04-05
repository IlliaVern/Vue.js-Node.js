var express = require('express');
var router = express.Router();

/* GET products pages. */
router.get('/', function (req, res, next) {
  res.render('products', {
    shopName: 'Products shop',
    products: [{
        productTitle: 'Rice',
        price: 38,
        description: 'The best basmati rice'
      },
      {
        productTitle: 'Spaghetti',
        price: 32,
        description: 'Perfect spaghetti from Italy'
      }]
  });
});

module.exports = router;