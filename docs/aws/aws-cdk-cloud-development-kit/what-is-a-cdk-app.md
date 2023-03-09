---
layout: default
title: What is the AWS CDK
parent: AWS-CDK-Cloud-Development-Kit
grand_parent: AWS
---

# What is the AWS CDK

AWS Cloud Development Kit (CDK) is a stack that co-ordinates the lifecycles of nested stacks.
It ships with methods that enable the app to connect with AWS CloudFormation Stacks.

The parent CDK stack has a root construct - or programmatic way of orchestrating the lifecyles of the stacks and resources within it using the command line interface (CLI).

The lifecycle in the root CDK stack is Construct -> Prepare -> Validate -> Synthesize -> Deploy

(Docs)[https://docs.aws.amazon.com/cdk/v2/guide/apps.html]

CDK stacks are 1-2-1 equivalents of the CloudFormation Stacks.

The CLI command `cdk synth` method synthesises all the templates in the CloudFormation platform.

Then you can deploy using `cdk deploy`.
