AWS-SQS - Simple Queing service. It is a fully managed message queue service that allows you to send, store and receive messages between applications without needing the applications to be online.

It was AWS' first service even before S3 and EC2 launched in 2006. It offers async message-based communication vs. API calls. Prior to SQS API calls had to be run between 2 applications for data to flow. The SQS service breaks this contract and can be used used to decouple applications by batching and queing event-driven messages between different applications, even if one of the applications is offline.

Using a combination of AWS-Lamdas and AWS-SQS results in polling and batching of the calls for messages. You can build powerful event-driven soltions. The function is called once for each batch. Batch size is between 1-1000, payload default is 10.

This makes it scalable, highly available and because it is fully managed by AWS it can be cost effective. No need to worry about maintenance, patching and the infrastructure behind it.

The free tier is 1-mil calls. It supports high volume of messages processing concurrently it scales quickly.

For beginners:
[https://www.youtube.com/watch?v=CyYZ3adwboc]

Effective for data-processing (IOT devices processing data between devices), real-time event-processing (e-commerce <-> analytics dashboards), ad-hoc job queueing (with timers - run jobs at night/ a particular time only)

Queue - First-in-first-out (Fifo) - first come first served in computer queues it is a pooling system that holds messages as they come in
Message - JSON format (same schema and format to make sure that pub-sub) limit 250KB per message entry
Publisher/Producer(enque) - the system that puts the message on to the queue
Processors/Consumers(deque) - the system that consumes the messages and takes it off the queue
