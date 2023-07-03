# AWS CDK Demo App

This repo demo's infrastructure as code with TypeScript and the AWS CDK. The AWS resources used are:

- AWS CDK - a collection of packages that provision the AWS backend
- AWS Lambdas - the building block of AWS' infrastructure as code
- API Gateway V@ - the gateway to used to access AWS CloudFormation services with HTTP network calls rather than a REST API
- S3 or AWS' Simple Storage System for static file storage - this proof of concept (Poc) is a document management system that stores docs
- VPC - create a virtual private cloud

The document management app configures resources with the AWS CDK CLI (Command Line Interface) and deploys it to an AWS Account configured with a geographic region

**AWS Infrastructure with TypeScript - David Tucker**
[https://app.pluralsight.com/library/courses/aws-infrastructure-typescript-getting-started/table-of-contents]

**Note**
(Up to module 5 worth following - after this the course is out of date using v1 methods for the aws-cdk - however this repo has deployed with v2 see `docs/aws/aws-cdk-cloud-development-kit/aws-cdk-v1-vs-v2.md` module 6 deals with Fargate integration)

## Pre-requisites

Check versions of node, npm, cdk, aws, docker and sam, if you do not have this installed then follow instructions to install

`node --version` check NodeJs v14 or higher or [install](https://nodejs.org/en/download/)
`Node 18.16.1`

`npm --version` check Npm - v7 or higher or [install](https://www.npmjs.com/package/npm)
`npm 9.5.1`

`cdk --version` check AWS CDK installed if not global install the aws-cdk - in terminal run: `npm install aws-cdk -g`
`2.85.0 (build 4e0d726)`

`aws --version` check AWS CLI v2 or [install]https://docs.aws.amazon.com/cli/latest/userguide/getting-started-prereqs.html)
`aws-cli/2.8.13 Python/3.9.11 Darwin/21.6.0 exe/x86_64 prompt/off`

`docker --version` or [install](https://docs.docker.com/desktop/install/mac-install/)
`Docker version 20.10.23, build 7155243`

`sam --version` or [install](https://aws.amazon.com/serverless/sam/)

- This PoC uses `npm` as a package manager and `lerna` as the monorepo package manager
- See `docs/package-management/lerna.md` for installation
- VS Code as an IDE
- Mac OS
- Create a directory for your app and initialise the AWS CDK locally in the repo `cdk init <yourappname> --language-typescript`
- An AWS account - set up the free-tier option

You will get the AWS-CDK package installed with all the methods it ships with and the folder-structure recommended.

## Useful commands

- `npm run build` compile typescript to js
- `npm run watch` watch for changes and compile
- `npm run test` perform the jest unit tests
- `cdk deploy` deploy this stack to your default AWS account/region
- `cdk diff` compare deployed stack with current state
- `cdk synth` emits the synthesized CloudFormation template

## Connecting local to your AWS Cloud Account

1. Log into your AWS Account

2. Use vim command in root `vi ~/.aws/credentials` and set up your AWS profile locally

You will need:
`aws_access_key_id`
`aws_secret_access_key`

3. In vim give your profile a name

Delete all previous configs exit vim `escape :` after the colon type`1,$d` (you can also delete a specific number of lines `:[Start],[end]d` eg: `:1,4d`)

Paste your config in the credentials file
exit vim `:wqa`

4. You can now configure the app with

`aws configure --profile your-profile-name`

5. Now set up the PoC code

- Start with the `bin` folder set up your root stack
- In the `lib` folder set up your root construct
- In the `lib/constructs` folder set up the provisioning and networking configuration
- In the API folder set up your HTTPS calls

6. You can bootstrap the app to whatever backend service you have chosen - in this app it is CloudFormation

7. Once bootstrapped, you can deploy the app - check it works on  Postman: 

[https://l99l6wyw28.execute-api.eu-west-2.amazonaws.com/getMusicAssets] as it is a simple HTTPS get request you should see the the docs

8. Destroy the build process.


To do:
Add Winston
Check the api gateway installation
