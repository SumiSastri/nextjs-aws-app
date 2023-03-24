Amazon Simple Notificatin Service is a fully managed messaging service of app-to-app (A2A) and app-to-person (A2P) communications.

Publisher sends SNS Topics to multiple Subscribers. The process is called fanout message distribution to SQS, Lamda or email, SMS, Slack etc.,

The subscriber can set up filters to filter only the information that it requires.

SNS Topic Types - Standard and Fifo

Unlike SQS there is no queueing system and it is not a message processing system it is a message notification system. The SQS system must poll the queue when new events get delivered. It must have a consumer that consumes this event and processes the event.

An SNS publishes the event and notifies other systems that an event has occured.
