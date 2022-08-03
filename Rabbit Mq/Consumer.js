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
            channel.prefetch(1)
            i=1
            console.log("Waiting for Messages to consume..")
            channel.consume(queueName,(msg)=>{
                setTimeout(()=>{
                    console.log(`Recieved(Consumer) : ${msg.content.toString()}`)
                    const data=msg.content.toString()
                    channel.ack(msg)
                    SContract.methods.setData(data).send({ from: accountAddress, gas: 6000000 }).then((tx) =>{
                        console.log("transaction Details")
                        console.log(tx.status)
                        console.log(tx.transactionHash)
                        // document.write(`{"status": ${tx.status} "txid": $${tx.transactionHash}}`)
                    })
                },1000)
            },{
                noAck:false
            })
        })    
    })    
}
module.exports=consumer;
