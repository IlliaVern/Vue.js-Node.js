var express = require('express');
var router = express.Router();
var {check, validationResult} = require('express-validator')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Users&Groups App' });
});

/* GET users page. */
router.get('/users', function(req, res, next) {
  const data = require(req.usersDir + 'users.json')
  if (data) {
  res.render('main', {title: 'Users&Groups App', page: users, users: data.users})}
  else res.render('index', { title: 'Users&Groups App' });
})

module.exports = router;
