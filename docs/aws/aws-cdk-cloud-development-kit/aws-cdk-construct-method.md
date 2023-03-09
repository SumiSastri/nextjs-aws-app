---
layout: default
title: AWS CDK Construct Method
parent: AWS-CDK-Cloud-Development-Kit
grand_parent: AWS
---

# AWS CDK Construct Method

The AWS CDK Construct method ships with the CDK library and allows you create the basic building blocks or constructs required to configure an AWS CDK app. This method takes out the grunt work of manually writing the pre-requisites and folders structure for the app and helps to separate concerns within the CDK app.

## Folder structure

- the entry point is the bin folder
- the lib has the stack configurations
- within the lib folder a new folder called constructs is created to set up the stack configurations and prevent the lib files from becoming too unweildy
- it is best practice to create these contructs to manage stacks

## Levels of constructs

Level 0 - Basic Resource (no type)
Level 1 - CloudFormation Resource - prefixed with Cfn (CloudFormation network)
Level 2 - Include helper methods and defaults an extension of Level 1 (Some services do not have Level 2 constructs which are faster and reduce deploy times) eg: DynamoDB has level 2 constructs
Level 3 - Combination of Constructs - intermingling of 1,2,3
