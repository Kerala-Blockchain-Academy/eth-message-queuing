var express = require('express');
var router = express.Router();
const consumer=require("../Rabbit Mq/Consumer")
const producer=require("../Rabbit Mq/Producer")
/* GET home page. */
consumer()
router.get("/", function (req, res) {
  // console.log("hello I'm on the start page");
  res.render("index");
});
router.post('/', function(req, res, next) {
  var msg=(req.body[0].hash)
  if(typeof(msg)=="undefined"){
    res.send("No input")
  }
  else{
    producer(msg)
    res.send("Transaction Successfull(Go to console for details)")
  }
});
// router.post('/login', function(req, res, next) {
//   var msg=(req.body.hash)
//   producer(msg)
//   consumer()
//   res.send("Transaction Successfull(Go to console for details)")
//   });
module.exports = router;

