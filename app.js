var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

/* ------- Requires-----*/
var Web3 = require('web3');
var MyContractJSON = require(path.join(__dirname, 'Storage.json'))
web3 = new Web3("http://127.0.0.1:8545");
contractAddress = MyContractJSON.address;
const contractAbi = MyContractJSON.abi;
accountAddress = "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266";
SContract = new web3.eth.Contract(contractAbi, contractAddress);
/*----------------------*/


var indexRouter = require('./routes/index');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);

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
