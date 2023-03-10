---
layout: default
title: AWS Event Bridge Benefits
parent: aws-event-bridge
grand_parent: aws
---

# AWS Event Bridge Benefits

## Modularity

As data does not need to be tightly coupled with the source of the data, microservices can be created for each module of code and each target. For example in an ecommerce app information that needs to go to sales may be different from that required by analytics teams.By utilising AWS EventBridge you can flex your architecture and create a microservice for each of these use cases.

## Fault Tolerance

When app is down messages still processed and then sent to the target once the app is up and running again, reduces data loss and downtime.

## Scalability

As services can be modularised, each module can be upsized or if they become unweildy each module can be further broken down into smaller modules, this makes an app quickly and easily scalable should volume of data increase.
