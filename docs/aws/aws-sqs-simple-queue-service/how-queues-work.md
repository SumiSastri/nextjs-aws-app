---
layout: default
title: How Queues Work
parent: aws-sqs
grand_parent: aws
---

# How Queues Work

Standard queues are processed on best effort. The order is not guaranteed, it is dependent on which message is easily processed. So you do not get it in an order that is guaranteed. Unlimited processing rate. Standard queues guarantee at least once delivery from the publisher to the subscriber.

Fifo (first-in-first-out) queues is a first-come-first-served basis. It guarantees exactly once delivery - you may want to timestamp your messages. Exactly once processing. There is a throttle of 300TPS (3000 if you used 10 messages per batch) - 25% more expensive. Multiple group message ids (eg. customer 1 and all events related to customer 1 can be batched by id and processed together). It guarantees the sequence of the execution of the stack.

## An Ecommerce Usecase

Order service (Ecommerce) Producer/ Publisher (enque) - digitial representation of sales orders

Analytics Processor/Consumer/ Subscriber (deque)- (Ecommerce - analysing the data from the ecommerce service) this service is interested in whether the order is booked, paid for, shipped, delivered, returned so that it can analyse the patterns and inform the wider business.

In the past APIs ran between the 2 services. With SQS the information can be queued and batched as messages from the e-commerce and consumed by the analytics service in real time without the need for an API call.

With a queue - let's call this the Sales-Analytics-Queue - SQS creates threads that continuously is polling the threads and checking the API for an event or messages. Whenever messages get inserted into the queue, they are dealt with on a first-come-first-served (Fifo) basis.

The message is taken off the queue and if successful will be dequeued.

The first step though, is to temporarily take it out of the queue, so it is temporarily invisible in the queue. A visibility timeout starts while the message is getting processed. Every message is taken out of the queue the timeout starts and the message processed. If successful then this waiting zone where the message is stored ephemerally, is deleted and the queue is alerted that the message has been successfully processed and dequeued.

If it fails it goes back to the top of the queue and the process starts again. Alternatively a sub process can start and the message can go into a dead-letter-queue (DLQ). In the DLQ attempts are made to successfully process the message received till it can be marked as successfull and dequeued. Or the failures decoupled, analysed and dealt with outside this queueing system.

Polling with an SQS versus API hands control to the consumer (the Analytics app) - backpressure control. The decision on how much, how fast and when to poll can be set in the SQS. It is more dynamic than a static API call. This makes the SQS process more elastic and scalable.

For the producer (the Ecommerce app) the message can be sent out on a "Fire and Forget" basis. There is no further action required once the information is sent. With an API failures in the response header have to be investigated further. Dependency reduction

Good if there is a delay not real-time. So async apps that require a guaranteed response, then SQS that is great. APIs are real time. This helps if there is an outage as the polling can resume after the outage and receive the messages. CORs issues with APIs so data availability can be compromised.

Application decoupling - if you have the SQS layer inbetween apps then there is no tight coupling.

The SQS as a fully managed service from AWS allows you to plug into the AWS infrastructure which is highly, resilient, very scalable, fault-tolerant, available, distributed and provides low latency as a result.
