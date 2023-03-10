---
layout: default
title: What Is An Event Bridge
parent: aws-event-bridge
grand_parent: aws
---

# What Is An Event Bridge

The AWS EventBridge, available to users since 2019, picks up data one at a time (not in batches) from the event bus and processes multiple events from multiple sources. EventBridge was formerly called Amazon CloudWatch Events. New features added to EventBridge are not added to CloudWatch Events.

The data that is ingested in the event bus of the AWS EventBridge can come from multiple sources - AWS or 3rd party.

The data on the EventBridge can be processed in multiple ways - transferred to AWS Lambdas, AWS Step Functions, a custom event bus and routed through the AWS serverless network/ infrastructure via an AWS Batch or directly to the service (eg. directly to Kinesis).

The processing of the data is based on the data-patterns and logic set to transform or transport this data. Logic can be written to each or only some of the key-value pairs on the JSON object. The EventBridge parses this logic and then dispatches the data based on custom logic written to a target. A target is the destination of the data after it is processed on the EventBridge.

Therefore data does not need to be tightly coupled with the source of the data (as in REST APIs) and the AWS EventBridge allows you to create a flexible architecture for all your data sources and deploy them to cloud based infrastructure.

Each packet of data that arrives on the bus can have different rules set and dispatched to different services, or targets, either on the AWS Cloud infrastructure or to third party services like CRMs/ fulfilment services/ ecommerce platforms, etc.

AWS has a default event bridge you can use with your account or you can set up your own custom event bridges to handle your data from your application.

Or as described by the documentation, AWS EventBridge receives an event, an indicator of a change in environment (eg: when a user clicks a button and the payload is submitted to the backed) and applies a rule to route the event to a target (eg: to the DynamoDb database or an S3 bucket or an AWS Lamda to enrich-transform data). Rules match events to targets based on either the structure of the event, called an event pattern, or on a schedule.

## EventBridge schema registry

The AWS EventBridge, unlike SQS, has a schema registry that collects and stores event schema patterns and this is what allows you to generate code bindings (or rules and logic set to the key-value pairs of the JSON object).

This means you can archive, or save, events and then replay them at a later time from the archive. Archiving is useful for testing an application because you have a store of events to use rather than having to wait for new events.
