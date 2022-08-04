const producer=(mess)=>{    
    const amqp =require("amqplib/callback_api");
    //Step1:Creating the connection
    amqp.connect('amqp://localhost',(err,connection)=>{
        if(err){
            throw err;
        }
        //Step3 Creating the Channel
        connection.createChannel((err,channel)=>{
            if(err){
                throw err;
            }
            //Checking Whether the message is string
            if(typeof(mess)==="string"){
                var mess1=mess
            }
            //Checking whether the message is an object
            else if(typeof(mess)==="object"){
                var mess1=JSON. stringify(mess)
            }
            //Step3 Creating Queue
            message1=mess1
            let queueName = "queue1"
            channel.assertQueue(queueName,{
            durable:true
            });
            //Step4: Send to queue
            channel.sendToQueue(queueName,Buffer.from(message1));
            console.log(`Message (Producer) : ${message1}`)
            setTimeout(()=>{
                connection.close()
            },1000);
        })
    })
}
module.exports=producer