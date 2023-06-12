Prequisites
`node --version` check NodeJs v14 or higher or install[https://nodejs.org/en/download/]
`npm --version` check Npm - v7 or higher or install [https://www.npmjs.com/package/npm]
`cdk --version` check AWS CDK installed if not global install the aws-cdk `npm install aws-cdk -g`
`aws --version` check AWS CLI v2 or install [https://docs.aws.amazon.com/cli/latest/userguide/getting-started-prereqs.html]
`docker --version` or install [https://docs.docker.com/desktop/install/mac-install/]
`sam --version` or install [https://aws.amazon.com/serverless/sam/]

# Welcome to your CDK TypeScript project

This is a blank project for CDK development with TypeScript.

The `cdk.json` file tells the CDK Toolkit how to execute your app.

## Useful commands

- `npm run build` compile typescript to js
- `npm run watch` watch for changes and compile
- `npm run test` perform the jest unit tests
- `cdk deploy` deploy this stack to your default AWS account/region
- `cdk diff` compare deployed stack with current state
- `cdk synth` emits the synthesized CloudFormation template

# Access to AWS-CDK demo

Log into your AWS Account

Use vim command in root `vi ~/.aws/credentials` and set up your AWS profile locally
You will need:

`aws_access_key_id`
`aws_secret_access_key`
in vim

- delete all previous configs exit vim `escape :` after the colon type`1,$d` (you can alos delete a specific number of lines `:[Start],[end]d` eg: `:1,4d`)

- Paste your config in the credentials file
- exit vim `:wqa`

Deploy on AWS
Postman: [https://l99l6wyw28.execute-api.eu-west-2.amazonaws.com/getMusicAssets]

To configure see docs section - `docs/aws/aws-cdk-cloud-development-kit/aws-cdk-workflow.md`
`cd packages aws-cdk-demo-app`
Bootstrap `cdk bootstrap --profile your-profile name`
Check documentation `cdk docs`
Deploy `cdk deploy` stacks are bundled and deployed
Use `npm run watch` in a separate terminal to watch code compile and catch bugs early
Check code diff `cdk diff`

This section follows the Plural Sight Course

Destroy each deploy after each session - this keeps you in the AWS free-tier band

This repo follows the tutorial
**AWS Infrastructure with TypeScript - David Tucker**
[https://app.pluralsight.com/library/courses/aws-infrastructure-typescript-getting-started/table-of-contents]

**Note**
(Up to module 5 worth following - after this the course is out of date using v1 methods for the aws-cdk - however this repo has deployed with v2 see `docs/aws/aws-cdk-cloud-development-kit/aws-cdk-v1-vs-v2.md` module 6 deals with Fargate integration)
