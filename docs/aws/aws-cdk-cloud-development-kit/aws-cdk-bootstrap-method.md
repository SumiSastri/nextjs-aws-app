---
layout: default
title: AWS CDK Bootstrap Method
parent: aws-cdk-cloud-development-kit
grand_parent: aws
---

# AWS CDK Bootstrap Method

The AWS CDK Bootstrap method ships with the CDK library and allows you to connect local stacks to the AWS Cloud Services.

The first step is to make a decision on the AWS CloudFormation stack to be used
eg:

- Node
- Fargate
- AppSync
- CloudFormation

- By running the command `cdk bootstrap()` in the background a CDK Tool Kit configures the local code to the AWS CloudFormation stack along with an S3 Bucket to store all Assets in an AWS Account.

It is required if any asset more than 50KB is required for the AWS CloudFormation templates.

(Also see AWS main folder and aws-cloud-formation sub-folder)
