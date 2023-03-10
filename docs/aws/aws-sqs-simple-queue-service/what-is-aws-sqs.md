---
layout: default
title: What is AWS SQS
parent: aws-sqs
grand_parent: aws
---

# What is AWS SQS

AWS SQS was Amazon Web Service's first cloud service even before S3 and EC2 launched in 2006.

It offers async message-based communication vs. API calls. Prior to SQS API calls had to be run between 2 applications for data to flow. The SQS service breaks this contract and can be used used to decouple applications by batching and queing event-driven messages between different applications, even if one of the applications is offline.

Using a combination of AWS-Lamdas and AWS-SQS results in polling and batching of the calls for messages. You can build powerful event-driven solutions. The function is called once for each batch. Batch size is between 1-1000, payload default is 10.

This makes it scalable, highly available and because it is fully managed by AWS it can be cost effective. No need to worry about maintenance, patching and the infrastructure behind it.

## Features

The queues are dealt with on a first-in-first-out (Fifo) basis
The free tier is 1-mil calls - it supports high volume of messages processing concurrently it scales quickly
Messages in the queue are in JSON format
There is a limit 250KB per message entry to keep the service efficient
The process is enque by the publisher - or the system that puts the message on the queue and deque by
the processors or consumers - the system that consumes the messages and takes it off the queue
There is a throttle of 300TPS (3000 if you used 10 messages per batch) - 25% more expensive.
Multiple group message ids (eg. customer 1 and all events related to customer 1 can be batched by id and processed together)
Messages are held for 1 to 14 days depending on the logic used to handle or process the data in the queue

## Usecases

Effective for data-processing (IoT devices processing data between devices), real-time event-processing (e-commerce <-> analytics dashboards), ad-hoc job queueing (with timers - run jobs at night/ a particular time only)
