---
layout: default
title: What is infrastructure as code
parent: Serverless
---


# What is infrastructure as code

Managing the data infrastructure of an app today, is as easy as writing code that determines how the infrastructure is managed.

It has the same workflow as a code developer working on app features

- Version Control
- Peer Reviews
- Testing
- CI-CD (continuous-integration and delivery)

Deployment workflow can be synchronised between the code base and the deployed version of the app through all environments.
The challenge of environment drift - if something is changed in the integration instance but not in the deploy instance the 2 environments will hold 2 different code bases - is minimised. Drift detection tools also further minimise the risk.


# Manual deploy - the Heroku REST API

In a manual infrastructure, you will have separate deployment of your code and your infrastructure. The 2 environments can drift as they can be managed by different teams, or packages go out of sync, or updates happen at different times and the code is not updated for interoperability.

This makes a manual deploy prone to error.