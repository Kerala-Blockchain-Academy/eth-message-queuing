# Implimentation of rabbit Mq in hardhat Project

### What is Rabbit MQ
<br><p>RabbitMQ is an open-source message-broker software that originally implemented the Advanced Message Queuing Protocol and has since been extended with a plug-in architecture to support Streaming Text Oriented Messaging Protocol, MQ Telemetry Transport, and other protocols.RabbitMQ is a message-queueing software also known as a message broker or queue manager. Simply said; it is software where queues are defined, to which applications connect in order to transfer a message or messages.</p>
<div align='center'>
<img src="https://www.cloudamqp.com/img/blog/message-queue-small.png" width="350" >
</div>

<br>

A message can include any kind of information. It could, for example, have information about a process or task that should start on another application (which could even be on another server), or it could be just a simple text message. The queue-manager software stores the messages until a receiving application connects and takes a message off the queue. The receiving application then processes the message.

<br>

### When and why should you use RabbitMQ?

<p>Message queueing allows web servers to respond to requests quickly instead of being forced to perform resource-heavy procedures on the spot that may delay response time. Message queueing is also good when you want to distribute a message to multiple consumers or to balance loads between workers.</p>

<p>The consumer takes a message off the queue and starts processing the PDF. At the same time, the producer is queueing up new messages. The consumer can be on a totally different server than the producer or they can be located on the same server. The request can be created in one programming language and handled in another programming language. The point is, the two applications will only communicate through the messages they are sending to each other, which means the sender and receiver have low coupling.</p>
<br>
<div align='center'>
<img src="https://www.cloudamqp.com/img/blog/rabbitmq-beginners-updated.png" width="900" >

</div>
<br>

The user sends a PDF creation request to the web application.
The web application (the producer) sends a message to RabbitMQ that includes data from the request such as name and email.
An exchange accepts the messages from the producer and routes them to correct message queues for PDF creation.
The PDF processing worker (the consumer) receives the task message and starts processing the PDF.

<br>

### Message flow in RabbitMQ
<br>

 1. The producer publishes a message to an exchange. When creating an exchange, the type must be specified. This topic will be covered later on.<br>
<br>

 2. The exchange receives the message and is now responsible for routing the message. The exchange takes different message attributes into account, such as the routing key, depending on the exchange type.
<br>

 3. Bindings must be created from the exchange to queues. In this case, there are two bindings to two different queues from the exchange. The exchange routes the message into the queues depending on message attributes.

 4. The messages stay in the queue until they are handled by a consumer
 
 5. The consumer handles the message.

 <br>

### Working of Blockchain with the help of rabbit MQ

<div align='center'>
<img src="https://developer.ibm.com/developer/default/patterns/integrate-rabbitmq-and-redis-cluster-with-a-blockchain-network/images/blockchain-rabbit-arch.png" >
</div>

1. Create and start the blockchain application.
2. Perform transactions on the blockchain network.
3. View results and transaction blocks created in the blockchain network.

<br>

## Work Flow

### Installination of  Rabbit MQ

####  Download Rabbit MQ from the given link https://github.com/rabbitmq/rabbitmq-server/releases/download/v3.10.6/rabbitmq-server-3.10.6.exe

#### Install dependency Erlang before installing rabbit mq  https://erlang.org/download/otp_versions_tree.html


#### Open Rabbit MQ Terminal Run Command:
`rabbitmq-plugins enable rabbitmq-management`
#### Then goto:
`localhost:15672`
#### Use 
`username:guest`

`password:guest`

There you can see Rabbit Mq local server and can view,manage the queue which you  have created.

#### learn about Coding👉:https://www.rabbitmq.com/getstarted.html



### Running The code

#### Install all the modules by

`npm install`

#### deply the contract by running the command

`npx hardhat --network polygon run .\scripts\deploy.js`

#### Then run the application using 0
`npm start`

#### To check the api, install postman and input data simoltaniously: 
<div align='center'>
<img src="https://voyager.postman.com/screen/postman-downloads-product-screen.svg" width=600> >
</div>

#### OR / do the same by multithreading(run same  command for n times simoltaniously for testing)

`curl -d "hash=abcd" -X POST http://127.0.0.1:3000`

#### Look the console you will get the transaction details

#### you can check the transacrtion bt going to polyscan(Mumbai)👉:https://mumbai.polygonscan.com/ and search for your Address

