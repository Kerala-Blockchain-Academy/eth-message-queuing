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
            if(typeof(mess)==="string"){
                var mess1=[]
                mess1.push(mess)
            }
            else{
                mess1=[...mess]
            }
            //Step3 Creating Queue
            const queueadd=(mess1)=>{
                if(mess1.length!=0){
                    message1=mess1.pop()
                    let queueName = "queue1"
                    channel.assertQueue(queueName,{
                    durable:false
                    });
                    //Step4: Send to queue
                    channel.sendToQueue(queueName,Buffer.from(message1));
                    console.log(`Message (Producer) : ${message1}`)
                    queueadd(mess1)
                }
                else{
                    return 
                }
            }
            queueadd(mess1)
            setTimeout(()=>{
                connection.close()
            },1000);
        })
    })
}
module.exports=producer