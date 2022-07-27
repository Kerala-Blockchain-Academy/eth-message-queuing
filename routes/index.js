var express = require('express');
var router = express.Router();
const consumer=require("../Rabbit Mq/Consumer")
const producer=require("../Rabbit Mq/Producer")
/* GET home page. */
router.get("/", function (req, res) {
  // console.log("hello I'm on the start page");
  res.render("index");
});

router.post('/', function(req, res, next) {
  var msg=(req.body.hash)
  producer(msg)
  consumer()
  res.send("Transaction Successfull(Go to console for details)")
});
// router.post('/login', function(req, res, next) {
//   const data = req.body;
//   SContract.methods.setData(data.hash).send({ from: accountAddress, gas: 6000000 }).then((tx) =>{
//     console.log(tx.status)
//     console.log(tx.transactionHash)
//     res.send({"status": tx.status, "txid": tx.transactionHash})
//   });
// });
module.exports = router;

