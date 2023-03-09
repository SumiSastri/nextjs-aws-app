---
layout: default
title: AWS CDK Installation
parent: AWS-CDK-Cloud-Development-Kit
grand_parent: AWS
---

# AWS CDK Installation

1. Install the AWS CDK with node package manager globally `npm install aws-cdk -g`
2. Create a directory for the project `aws-cdk-demo-app`
3. Check you have installed the library `cdk -version`
4. Initialise the directory with the cdk library and the language you are going to use `cdk init app --language=typescript`

The package ships with

- node modules preinstalled
- a binary (bin) folder it is the entry point for the application
- a lib folder
- a test folder
- the dotfiles `.gitignore` and `.npmignore`
- in addition to the `package.json` file there is a `cdk.json` file (review both to familiarise yourself with what is in it)
- for typescript the `tsconfig.json` file

## Useful CLI commands

check documentation `cdk docs`
bootstrap local code to cloud services`cdk bootstrap`
list all stacks `cdk list`
destroy cdk `cdk destroy`
check local with deploy `cdk diff`
