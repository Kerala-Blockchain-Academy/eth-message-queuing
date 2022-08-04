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
                durable:true
            });
            channel.prefetch(1)
            i=1
            console.log("Waiting for Messages to consume..")
            channel.consume(queueName,(msg)=>{
                setTimeout(()=>{
                    console.log(`Recieved(Consumer) : ${msg.content.toString()}`)
                    const data=msg.content.toString()
                    SContract.methods.setData(data).send({ from: accountAddress, gas: 6000000 }).then((tx) =>{
                        console.log("transaction Details")
                        console.log(tx.status)
                        console.log(tx.transactionHash)
                        //Giving the acknowledgement to the queue that sucessfully used the message for transaction.
                        channel.ack(msg)
                    })
                },2000) 
            },{// To make automatic acknowledgement off//For default it's false.
                noAck:false
            })
        })    
    })    
}
module.exports=consumer; 

