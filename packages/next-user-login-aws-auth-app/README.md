# AWS architecture diagram

<img src="docs/assets/nextJs-auth-architecture.png" alt="NextJs and AWS Authorisation App Architecture Diagram" height="350"/>

Amplify is the glue that connects the NextJs front end to the AWS Cloud Services we are using in this app

- AWS AppSync
- AWS Cognito User Pools

Amplify needs to be configured in a React-HOC (Higher-Order-Component)

## Repo access

Pre-requisites:
This repo uses `npm` and `lerna` as package managers.

- Fundamentals of HTML, CSS (Bootstrap), JavaScript (ES6), TypeScript, React, NextJs, NodeJs, npm & monorepo package management with Lerna, version control with GitHub, API calls - GraphQL
- GitHub account
- Text editor
- AWS account
- NodeJs <=10
- npm <=5

If you have cloned the main repo - [https://github.com/SumiSastri/nextjs-aws-app.git]

`npx lerna bootstrap` (adds node modules to each submodule)

`cd packages/next-user-login-aws-auth-app` (if this does not work)

- `npm install --y`(install node modules)

Updating packages `npx npm-check-updates -i '/@?aws-amplify/' && npm update`

If the installation is buggy remove `package-lock.json` and `node_modules` and install and update node packages again

## Front end scripts

`npm run dev` spins up the app in localhost:3000

## Useful Amplify commands

- `amplify status` for changes
- `amplify push` deploys changes
- `amplify pull --appId xxx --envName xxx`

- `amplify add name of service` - add an AWS service
- `amplify remove name of service` - delete a backend service if you want to reconfigure
- `amplify update name of service` - update an AWS service

- `amplify auth console` you will be connected to the Amplify Console - check user has been created.
- `amplify auth console` select `UserPool` Check cognito user pools
- `amplify api console` select graphql
