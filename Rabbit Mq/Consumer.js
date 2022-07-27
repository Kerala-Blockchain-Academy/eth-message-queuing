const consumer=()=>{ 
    const amqp =require("amqplib/callback_api");

    amqp.connect('amqp://localhost',(err,connection)=>{
        if(err){
            throw err;
        }
        connection.createChannel((err,channel)=>{
            if(err){
                throw err;
            }
            let queueName = "queue1"
            channel.assertQueue(queueName,{
                durable:false
            });
            channel.consume(queueName,(msg)=>{
                console.log(`Recieved(Consumer) : ${msg.content.toString()}`)
                const data=msg.content.toString()
                SContract.methods.setData(data).send({ from: accountAddress, gas: 6000000 }).then((tx) =>{
                    console.log(tx.status)
                    console.log(tx.transactionHash)
                    // document.write(`{"status": ${tx.status} "txid": $${tx.transactionHash}}`)
                  }).catch((err)=>{
                    if (err){
                        throw err
                    }
                  })
                  
            },{
                noAck : true
            });
        })    
    })
}
module.exports=consumer
