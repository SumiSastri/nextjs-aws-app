# Scaffolding

## next-user-login-aws app

**Client-side**

Nextjs global installation `npm install -g create-next-app`
Create a Nextjs app in a folder
`npx create-next-app your-app-name` You can select whether you would like to add TypeScript/ ESLint to the project during the scaffolding. This app selects both.
Styles `npm install react-bootstrap bootstrap`
See blog Handling Bootstrap with Nextjs[https://blog.logrocket.com/handling-bootstrap-integration-next-js/]

There are some conflicts to be resolved with `eslint`

```
// Create a .babelrc in your root folder adding this
{
  "presets": ["next/babel"],
  "plugins": []
}
// Then replace current code on .eslintrc with this
{
  "extends": ["next/babel"]

Scripts `npm run dev` - local environment
```

**AWS Account**

- Create AWS account - 12 month free option [https://aws.amazon.com/free/]
- A credit card is taken and multi-factor-authentication required
- Follow steps to create free acount note that AWS can charge your credit card at any time and change its policy
- Set up budget tracker for a low amount like $1/Eur1

You will be prompted in terminal
AWS Access Key ID [None]: (your access id)
AWS Secret Access Key [None]: (your access key)
Default region name [None]: eu-west-2 (or as you set it)
Default output format [None]: json

You can create bespoke profiles as well.

In root directory check using vim - `vi ~/.aws/credentials` you should see your environment variable saved
To quit vim `:wqa`

To change details if you have got them wrong - see instructions on aws configure set [https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-files.html] more details [https://docs.aws.amazon.com/cli/latest/reference/configure/set.html]

- change output format `aws configure set output json`/ `aws configure set output text`
- change region name - `aws configure set region us-west-2`

**AWS Amplify**

Docs
[https://docs.amplify.aws/cli/start/install/#install-the-amplify-cli] &
[https://docs.amplify.aws/cli/start/install/#option-2-follow-the-instructions]

1. Installation
   Install the amplify cli globally
   `npm install -g @aws-amplify/cli`

2. Configuration
   In (computer) root run
   `amplify configure` - creates a new AWS-IAM user
   Go through the configure steps and create a user on the AWS Amplify service in your AWS online account

   - You will need the region and secrets keys

3. Install ui library `npm install aws-amplify @aws-amplify/ui-react` in root of your project

4. Initialise project to create local folder for amplify - go to the root of your app and run `amplify init` the command auto-detects settings and sets up the project with defaults.

Packages required by Amplify will be installed in your project and a directory called amplify will be installed in your app `packages/next-user-login-aws-auth-app/amplify` have a look at the folder to see the configuration. It is in this folder is where all the `.json` resources for your cloud configuration to the AWS Services you use are automatically configured for you.

The initialisation also creates a file `packages/next-user-login-aws-auth-app/src/aws-exports.js` this connects the AWS resources with the local project.

6. In root of the app run `amplify add auth` to get the pre-built ui for the authentication

7. Add the api (REST or GraphQL) `amplify add api` if you already have amplify you need to run `amplify update api` and update the package

8. Run `amplify status` for changes

9. Deploy changes `amplify push` this creates a cognito user pool in the cloud.

If you have created a bespoke profile ` amplify push your profile name` eg: `amplify push sumi-dev-amplify`

**AWS Cognito**

**AWS App Sync**

## server app

This is the GraphQL Section which demos a full server-side creation of a GraphQL API deployed on Heroku

- Create an account and then login
- MONGODB: https://account.mongodb.com/account/login
- To connect cloud based Mongo services to local

## aws-cdk-demo-app

Create an AWS account (see above)

**AWS CLI**

For macs[https://awscli.amazonaws.com/AWSCLIV2.pkg]

**AWS CDK**

To configure see the aws-cdk-cloud-development-kit section and the document `aws-cdk-workflow.md`

TypeScript AWS-CDK - in root
`npm install @aws-cdk/aws-lambda`
`npm install @aws-cdk/aws-lambda-nodejs`
`npm i esbuild` (JavaScript & TypeScript minifier and bundler)

TypeScript Lamda
`npm install -save-dev "@types/aws-lambda": "^8.10.108"`
`npm install -save-dev "aws-sdk": "^2.1258.0" `
