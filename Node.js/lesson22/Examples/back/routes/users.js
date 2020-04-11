var express = require('express');
var router = express.Router();

const users=[
  {
    name:"Ivan",
    age:23
  },
  {
    name:"Petro",
    age:34
  },
  {
    name:"Sidor",
    age:41
  }
]
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*")    
  res.json(users);
});
router.get('/:num', function(req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*")    
  res.json([ users[+req.params['num']] ]);
});


module.exports = router;
