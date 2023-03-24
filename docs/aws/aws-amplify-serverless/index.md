---
layout: default
title: AWS Amplify
parent: aws-amplify-serverless
grand_parent: aws
---

# AWS-Amplify

AWS Amplify is the glue that connects frontends to backends. This is done by abstracting away a lot of the build grunt work as it is a fully managed system.

At the time of writing (March 2023) there are over 175 services you can connect your frontend apps to the AWS Cloud. However, it comes with a health warning. As it is a managed service each connection you add - eg: an API to AWS-AppSync, auth with AWS-Cognito - you have no control over how this is configured and it can be painful to debug.

Understanding how to configure each of these services manually counter-intuitively may save you time.
