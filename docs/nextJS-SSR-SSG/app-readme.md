# AWS architecture diagram

<img src="docs/assets/nextJs-auth-architecture.png" alt="NextJs and AWS Authorisation App Architecture Diagram" height="350"/>

Amplify is the glue that connects the NextJs front end to the AWS Cloud Services we are using in this app

- AWS AppSync
- AWS Cognito User Pools

Amplify needs to be configured in a React-HOC (Higher-Order-Component) to connect the client to the AWS managed cloud servers via Amplify.


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

## Repo access

Pre-requisites:
This repo uses `npm` and `lerna` as package managers.

- Fundamentals of HTML, CSS (Bootstrap), JavaScript (ES6), TypeScript, React, NextJs, NodeJs, npm & monorepo package management with Lerna, version control with GitHub, API calls - GraphQL
- GitHub account
- Text editor
- AWS account



Updating packages `npx npm-check-updates -i '/@?aws-amplify/' && npm update`

If the installation is buggy remove `package-lock.json` and `node_modules` and install and update node packages again

## Frontend scripts

`cd packages/next-user-login-aws-auth-app`

`npm run dev` Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Amplify Scaffodling

For how to set up amplify more in `docs/aws/aws-amplify-serverless/amplify-scaffolding.md`
