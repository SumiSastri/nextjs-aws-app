# nextjs-aws-app

API creation GraphQL-MongoDB-Express - deployed on Heroku

Pre-requisistes

- Node
- nvm
- Heroku account
- MongoDb free tier account
- AWS free tier personal account for 12 months
  ( NOTE: AWS can change to paid model at any time. Credit card details required up front.
  Set budget limits and/or destroy code or close account in 12 months)

# Repo access

Clone [https://github.com/SumiSastri/nextjs-aws-app.git]
Install dependencies `npm init -y`
Seed data `server/data/mocks` to populate your MongoDb database
Spin up express server - cd server and `node index.js`
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

# Access to GraphQL API on Heroku

This repo has been deployed to Heroku and the data is avaliable at
[https://nextjs-aws-app.herokuapp.com/graphql]

# Access to AWS-CDK demo

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
