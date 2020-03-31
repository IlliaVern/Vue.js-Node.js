var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var app = express();
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
//----- Обробка статичних маршрутів
// -- ДЗ задача 1

// app.get("/",function (req,res) {
//   res.send("Hello User");
// });
// app.get("/goals",function (req,res) {
//   res.send("Список цілей: - стати Fullstack Web Developer -вивчити Vue.js - вивчити Node.js, Express.js, MongoDB");  
// });

// -- ДЗ задача 2
app.get("/",function (req,res) {
  console.log(req.url);
  });


// -- ДЗ задача 3
// app.get("/info/:myLinks",         //< --- Маршрут містить параметр «:myLinks
//     function (req,res) {
//     switch(req.params["myLinks"])   //< --- Використання параметру   «:myLinks
//     {
//         case "favourite":res.send("My favourite web links");
//         break;
//         case "online-cinemas":res.send("Online cinemas web adsresses");
//             break;
//         case "my-info":res.send("Information about me");
//             break;
//     }
// });
// app.get("/",         //< --- Маршрут містить параметр «:myLinks
// function (req,res) {
//     res.send("Hello");
// });


// app.use('/', indexRouter);
// app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});
// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  // render the error page
  res.status(err.status || 500);
  res.render('error');
});
module.exports = app;