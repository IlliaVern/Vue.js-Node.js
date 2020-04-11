var express = require('express');
var router = express.Router();
const { check, validationResult } = require('express-validator');


/* GET books listing. */
router.get('/', function(req, res, next) {
  const data = require(req.bookDir + '/books.json')
  res.render('main', {title: 'Library App', page: 'books-list', books: data.books})
});

router.get('/add', function(req, res, next){
  res.render('main', {title: 'Library App', page: 'add-book'})
})

router.post('/add',
[
  check('title').isLength({min:2}).bail().withMessage('Название должно быть длиннее 2-х букв'),
  check('author').isLength({min:5}).bail().isString({min:5}).bail().withMessage('Имя и фамилия автора должны быть текстом и длиннее 5-ти букв'),
  check('year').isFloat({min: 0, max: 2020 }).withMessage('Год написания должен быть от 0 до 2020')
],
function(req, res, next) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.json({success:false, err:{msg:errors.array().map(e=>e.msg).join(', ')}})
  }
  else {
    const data = require(req.bookDir + '/books.json')
    data.books.push({
      title: req.body.title,
      author: req.body.author,
      year: req.body.year
    })
    var fs = require('fs')
    fs.writeFile(req.bookDir + '/books.json', JSON.stringify(data), function(err){
      if (err) res.json({success:false, err: {msg:"Ошибка при записывании файла"}});
      res.json({success:true, msg:"Сохранено"});
    })
  }
})

module.exports = router;
