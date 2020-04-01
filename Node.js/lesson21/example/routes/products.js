var express = require('express');
var router = express.Router();


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('product',{
    shopTitle:'My shop',
    products:[
      {
      productTitle:'Notebook1',
      price:5,
      description:'The best'
    },
      {
      productTitle:'Notebook2',
      price:5,
      description:'The best'
    },
      {
      productTitle:'Notebook3',
      price:5,
      description:'The best'
    }        
  ]
  });
});

module.exports = router;
