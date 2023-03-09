---
layout: default
title: AWS CDK Synth Method
parent: AWS-CDK-Cloud-Development-Kit
grand_parent: AWS
---

# AWS CDK Synth Method

Synthesing is the process useed to convert one or more AWS CDK stacks code to AWS CloudFormation templates and related assets to manage the CloudFormation infrastructure.

Running the method `cdk synth()` generates the CloudFormation templates. It traverses the CDK-app tree and invokes the method on all constructs in the app. It generates unique IDs for the CloudFormation Templates and then generates the code needed for the files/ assets that are bundled into the CDK-app. These could be lambda handler code, docker images, s3 static assets. These assets are any artifacts that the app needs to operate. When `cdk synth()` or `cdk deploy()` are run a `cdk.out` file is generated.

The synth process is a handoff from the local machine code to the CloudFormation Deployment. The output is sent to CloudFormation to deploy code in the AWS Cloud.
