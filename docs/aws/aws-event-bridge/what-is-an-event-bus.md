---
layout: default
title: What Is An Event Bus
parent: aws-event-bridge
grand_parent: aws
---

# What Is An Event Bus

An event bus can ingest (without processing) multiple events from multiple sources. All events that come to the AWS EventBridge are associated with an event bus. Rules are tied to a single event bus, so they can only be applied to events on that event bus.

The events can come from external sources, custom applications you are building or from internal AWS Sources - like an S3 bucket or DynamoDb table.

So put simply, an event bus transports these payloads on the AWS EventBridge and helps to connect applications with data from a variety of different sources. For example if the user clicks a submit button on a form, the payload goes on to an event bus - based on the rules written to the payload that is on the bus, the EventBridge then transports and routes this data based on the logic and rules written to the payload - in this case, the data can be sent to a database, a datawarehouse, a data streaming service, a data enhancement and enrichment service depending on what needs to be done with the received data from the user.

EventBridge API destinations are HTTP endpoints that you can set as the target of a rule.
