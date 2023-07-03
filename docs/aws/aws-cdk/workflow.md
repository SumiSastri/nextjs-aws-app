---
layout: default
title: Workflow
parent: AWS CDK
---

# Workflow

The key steps in the AWS-CDK workflow are:

 _Install -> Configure -> Construct & Validate -> Bootstrap -> Synthesize -> Deploy -> Destroy_

## Pre-requisites

Check versions of node, npm, cdk, aws, docker and sam, if you do not have this installed then follow instructions to install

`node --version` check NodeJs v14 or higher or [install](https://nodejs.org/en/download/)
`npm --version` check Npm - v7 or higher or [install](https://www.npmjs.com/package/npm)
`cdk --version` check AWS CDK installed if not global install the aws-cdk - in terminal run: `npm install aws-cdk -g`
`aws --version` check AWS CLI v2 or [install]9https://docs.aws.amazon.com/cli/latest/userguide/getting-started-prereqs.html)
`docker --version` or [install](https://docs.docker.com/desktop/install/mac-install/)
`sam --version` or [install](https://aws.amazon.com/serverless/sam/)

- This PoC uses `npm` as a package manager and `lerna` as the monorepo package manager
- See `docs/package-management/lerna.md` for installation
- VS Code as an IDE
- Mac OS
- An AWS account - set up the free-tier option

## INSTALL

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

Lerna  or `pnpm` can be used as package managers across all node-based repos

Once installed AWS and all dependencies have to be configured.

### Useful CLI commands

check documentation `cdk docs`
bootstrap local code to cloud services`cdk bootstrap`
list all stacks `cdk list`
check local with deploy `cdk diff`

## CONFIGURE

All dependencies can be installed with `npm` from the AWS V2 services.

In the project `cd aws-cdk-demo-app`
Configure AWS to sync local to AWS Cloud services `aws configure --profile your-profile-name`

You will be prompted in terminal:

```md
AWS Access Key ID [None]: (your access id)
AWS Secret Access Key [None]: (your access key)
Default region name [None]: eu-west-2 (or as you set it)
Default output format [None]: json
```

[Guidelines on AWS docs](https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-quickstart.html)

You can run the whole process with the CLI after the initial set up.

- Log into your AWS Account

- Use vim command in root `vi ~/.aws/credentials` and set up your AWS profile locally

You will need:

`aws_access_key_id`
`aws_secret_access_key`

- In vim give your profile a name:

- Delete all previous configs exit vim `escape :` after the colon type`1,$d` (you can also delete a specific number of lines `:[Start],[end]d` eg: `:1,4d`)

- Paste your config in the credentials file exit vim `:wqa`

In root directory check using vim - `vi ~/.aws/credentials` you should see your environment variable saved
To quit vim `:wqa`

To change details if you have got them wrong - see [instructions on the link](https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-files.html) and for [more details](https://docs.aws.amazon.com/cli/latest/reference/configure/set.html)

- change output format `aws configure set output json`/ `aws configure set output text`
- change region name - `aws configure set region us-west-2`

## BOOTSTRAP

The AWS `cdk bootstrap()` method ships with the CDK library and allows you to connect local stacks to AWS Cloud Services.

The first step is to make a decision on the AWS CloudFormation stack to be used, this app uses CloudFormation

eg:
- Node
- Fargate
- AppSync
- CloudFormation

Once configured you can bootstrap or connect the local machine to the AWS cloud services
`cdk bootstrap --profile your-profile name`

You will get the success message

```JavaScript
CDKToolkit: creating CloudFormation changeset...
 ✅  Environment aws://992722868670/eu-west-2 bootstrapped.
```

- By running the command `cdk bootstrap()` in the background a CDK Tool Kit configures the local code to the AWS CloudFormation stack along with an S3 Bucket to store all Assets in an AWS Account - [See repo code](https://github.com/SumiSastri/nextjs-aws-app/tree/main/packages/aws-cdk-demo-app) to follow.

## SYNTHESIZE

Synthesing is the process useed to convert one or more AWS CDK stacks code to AWS CloudFormation templates and related assets to manage the CloudFormation infrastructure.

Running the method `cdk synth` generates the CloudFormation templates. It traverses the CDK-app tree and invokes the method on all constructs in the app. It generates unique IDs for the CloudFormation Templates and then generates the code needed for the files/ assets that are bundled into the CDK-app. These could be lambda handler code, docker images, S3 static assets. These assets are any artifacts that the app needs to operate. 

When `cdk synth` or `cdk deploy` are run a `cdk.out` file is generated.

The synth process is a handoff from the local machine code to the CloudFormation Deployment. The output is sent to CloudFormation to deploy code in the AWS Cloud.

In root of app
`mkdir templates`
`cdk synth --output=./templates`

Debugging synth: AssertDescription: CDK bootstrap stack version 6 required. Please run 'cdk bootstrap' with a recent version of the CDK CLI.

## DEPLOY

After running the synth command if it is successful you can run

`cdk deploy` add the name if you have several stacks

Deploy the CDK to an AWS Account and the default region you have set - your success message should look like this

```JavaScript
✨  Synthesis time: 7.09s

AwsCdkDemoAppStack: building assets...

[0%] start: Building 884dc6d3936239e2e5c7e60bc79f644f14c200ab867c3944c09084043bd5df73:current_account-current_region
[100%] success: Built 884dc6d3936239e2e5c7e60bc79f644f14c200ab867c3944c09084043bd5df73:current_account-current_region

AwsCdkDemoAppStack: assets built

AwsCdkDemoAppStack: deploying...
[0%] start: Publishing 884dc6d3936239e2e5c7e60bc79f644f14c200ab867c3944c09084043bd5df73:current_account-current_region
[100%] success: Published 884dc6d3936239e2e5c7e60bc79f644f14c200ab867c3944c09084043bd5df73:current_account-current_region
AwsCdkDemoAppStack: creating CloudFormation changeset...

 ✅  AwsCdkDemoAppStack

✨  Deployment time: 38.72s

Outputs:
AwsCdkDemoAppStack.IdCheckDocumentsExport = awscdkdemoappstack-idcheckdocumentsa049e4fd-1uya8rsudy3ie
Stack ARN:
arn:aws:cloudformation:eu-west-2:992722868670:stack/AwsCdkDemoAppStack/9119f1a0-674e-11ed-9645-06a93b1d6e30

✨  Total time: 45.81s
```

## DESTROY

You can destroy the deployed CDK anytime and redeploy it using the steps above. The destroy does not destroy the code base on your local - only the synth files and the deploy on the AWS Cloud. When you want to work again on the app you can write new code, and follow the CDK work flow to the deploy section check if it works and destroy again.

destroy cdk `cdk destroy` - you will get a prompt to destroy and then the deploy is destroyed

```JavaScript
Are you sure you want to delete: AwsCdkDemoAppStack (y/n)? y
AwsCdkDemoAppStack: destroying...

 ✅  AwsCdkDemoAppStack: destroyed
```
