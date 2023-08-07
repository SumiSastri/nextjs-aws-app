# Stack

- NextJs
- AWS Amplify, AppSync and Cognito
- NodeJs <=10
- npm <=5

## Access

Clone [https://github.com/SumiSastri/nextjs-aws-app.git]
Package manager - npm
In root install node `npm install -y`
Script - `npm run dev` - opens in localhost:3000

## Scaffolding

Amplify:  `docs/aws/aws-amplify-serverless/amplify-scaffolding.md`

## Amplify scripts

- `amplify status` for changes
- `amplify push` deploys changes
- `amplify pull --appId xxx --envName xxx`

- `amplify add name of service` - add an AWS service
- `amplify remove name of service` - delete a backend service if you want to reconfigure
- `amplify update name of service` - update an AWS service

- `amplify auth console` you will be connected to the Amplify Console - check user has been created.
- `amplify auth console` select `UserPool` Check cognito user pools
- `amplify api console` select graphql
