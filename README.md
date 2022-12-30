# nextjs-aws-app

Server and serverless apps with Lerna as a package manager.

# Available scripts

1. GraphQL-MongoDB-Express Server App
   `cd packages/server`
   run `nodemon server`

This repo has been deployed to Heroku - the data is temporarily unavailable as Heroku is no longer supporting free deployment and is still processing my payment
[https://nextjs-aws-app.herokuapp.com/graphql]

To debug `node --trace-deprecation ...`
`ps aux | grep mongo ` 2. AWS auth app
`cd packages/next-user-login-aws-auth-app`
run `npm serve dev`
You will need to use a valid email address to authenticate your access to the app.

3. AWS CDK app

- Test on postman

# Repo access

Pre-requisistes

- Node
- nvm
- Heroku account
- MongoDb free tier account
- AWS free tier personal account for 12 months
  ( NOTE: AWS can change to paid model at any time. Credit card details required up front.
  Set budget limits and/or destroy code or close account in 12 months)

Clone [https://github.com/SumiSastri/nextjs-aws-app.git]
Install dependencies `npm init -y`
Seed data `server/data/mocks` to populate your MongoDb database
Spin up express server - `cd server` and `node index.js`
Set up your MongoDb access - you need to be logged on to your MongoCloud
Quick link to login [https://account.mongodb.com/account/login]
Create a dotenv file - sample config

```
NODE_ENV="development"
PORT=4000
mongodb+srv://username:<password>@cluster0.slip5.mongodb.net/test
```

# Package management

Install lerna in root n`pm install lerna --save-dev`
Initialise `npx lerna init`
You should have an empty packages folder in root as well as a lerna.json and package.json file. In the `package.json` as well as the `lerna.json` add a version "version": "1.0.0". Add a .gitignore file to ignore node modules
Update all packages in the app in root with `npx lerna bootstrap`
Run build in root `npm run build`

# Access to NextJs-AWS

If you have cloned the app run `npx lerna bootstrap` in root to ensure you have node modules installed

`cd packages/next-user-login-aws` and spin up front end `npm serve dev`

**AWS-Amplify-Cognito**

Log into your AWS Account
`amplify configure` - follow instructions to configure

You will need to save your:

`aws_access_key_id`
`aws_secret_access_key`

Once set up you can `amplify push` to build the repo

Everytime you need to update or access this section you will need to configure Amplify to access the repo data.

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
**AWS Infrastructure with TypeScript - David Tucker**
[https://app.pluralsight.com/library/courses/aws-infrastructure-typescript-getting-started/table-of-contents]

**Note**
(Up to module 5 worth following - after this the course is out of date using v1 methods for the aws-cdk - however this repo has deployed with v2 see `docs/aws/aws-cdk-cloud-development-kit/aws-cdk-v1-vs-v2.md` module 6 deals with Fargate integration)
