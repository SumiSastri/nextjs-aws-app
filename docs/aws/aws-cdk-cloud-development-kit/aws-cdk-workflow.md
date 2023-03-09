---
layout: default
title: AWS CDK Workflow
parent: AWS-CDK-Cloud-Development-Kit
grand_parent: AWS
---

# AWS CDK WorkFlow

The workflow is Install -> Configure -> Construct -> Boostrap -> Synthesize -> Deploy -> Destroy

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

### Useful CLI commands

check documentation `cdk docs`
bootstrap local code to cloud services`cdk bootstrap`
list all stacks `cdk list`
check local with deploy `cdk diff`

## CONFIGURE

In the project `cd aws-cdk-demo-app`
Configure AWS to sync local to AWS Cloud services `aws configure --profile your-profile-name`

You will be prompted in terminal
AWS Access Key ID [None]: (your access id)
AWS Secret Access Key [None]: (your access key)
Default region name [None]: eu-west-2 (or as you set it)
Default output format [None]: json

Guidelines on AWS docs[https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-quickstart.html]

In root directory check using vim - `vi ~/.aws/credentials` you should see your environment variable saved
To quit vim `:wqa`

To change details if you have got them wrong - see instructions on aws configure set [https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-files.html] more details [https://docs.aws.amazon.com/cli/latest/reference/configure/set.html]

- change output format `aws configure set output json`/ `aws configure set output text`
- change region name - `aws configure set region us-west-2`

## BOOTSTRAP

Once configured you can bootstrap or connect the local machine to the AWS cloud services
`cdk bootstrap --profile your-profile name`

You will get the success message

```
CDKToolkit: creating CloudFormation changeset...
 ✅  Environment aws://992722868670/eu-west-2 bootstrapped.
```

## SYNTHESIZE

In root of app
`mkdir templates`
`cdk synth --output=./templates`

Debugging synth: AssertDescription: CDK bootstrap stack version 6 required. Please run 'cdk bootstrap' with a recent version of the CDK CLI.

## DEPLOY

After running the synth command if it is successful you can run

`cdk deploy` add the name if you have several stacks

Deploy the CDK to an AWS Account and the default region you have set - your success message should look like this

```
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

```
Are you sure you want to delete: AwsCdkDemoAppStack (y/n)? y
AwsCdkDemoAppStack: destroying...

 ✅  AwsCdkDemoAppStack: destroyed
```
