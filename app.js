var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const consumer=require("../Rabbit Mq/Consumer")
const producer=require("../Rabbit Mq/Producer")
/* ------- Requires-----*/
var Web3 = require('web3');
var MyContractJSON = require(path.join(__dirname, 'Storage.json'))

const HDWalletProvider = require('@truffle/hdwallet-provider');

const mnemonic = "rookie dinosaur artwork moment hybrid vibrant design deputy hub maze imitate squeeze";
addressIndex = 0;
numberOfAddresses = 1;

var indexRouter = require('./routes/index');

const provider = new HDWalletProvider(mnemonic, `https://polygon-mumbai.g.alchemy.com/v2/iXDJBEPZT6kLteFaRdgrIYWEor5VaZGK`, 
                                      addressIndex, numberOfAddresses);

web3 = new Web3(provider);
contractAddress = MyContractJSON.address;
const contractAbi = MyContractJSON.abi;
accountAddress = "0x06df165b909Ed8087feCDf35B97D8d5Ab83D8cf0";
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
// app.use(function(req, res, next) {
//   next(createError(404));
// });

// // error handler
// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};

//   // render the error page
//   res.status(err.status || 500);
//   res.render('error');
// });
// app.post('/login',(req,res)=>{
//   var msg=(req.body.hash)
//   console.log(msg)
//   producer(msg)
//   consumer()
//   res.send("Success (Look Console)")
// }); 
module.exports = app; 

 
