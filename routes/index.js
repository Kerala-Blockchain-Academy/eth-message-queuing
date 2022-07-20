var express = require('express');
var router = express.Router();

/* GET home page. */
router.post('/', function(req, res, next) {
  const data = req.body;
  SContract.methods.setData(data.hash).send({ from: accountAddress, gas: 6000000 }).then((tx) =>{
    console.log(tx.status)
    console.log(tx.transactionHash)
    res.send({"status": tx.status, "txid": tx.transactionHash})
  });
});

module.exports = router;
