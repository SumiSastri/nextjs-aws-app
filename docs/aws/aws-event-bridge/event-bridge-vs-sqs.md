---
layout: default
title: AWS Event Bridge vs AWS SQS
parent: aws-event-bridge
grand_parent: aws
---

# AWS Event Bridge vs AWS SQS

AWS EventBridge proccesses one event at a time while SQS processes events in batches. EventBridge can match multiple rules and be sent to multiple targets while SQS, the event is placed on a queue, temporarily removed from the queue, processed and the event is no longer available after processing - on a fire and forget basis. This means that you can not set rules to the event or send these events to multiple targets.
