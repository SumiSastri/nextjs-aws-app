---
layout: default
title: AWS Add Cognito Auth
parent: aws-amplify-serverless
grand_parent: aws
---

# AWS Add Cognito Auth

Each backend service you require will have to be added to the amplify configuration this is one of over 100 services you can add to Amplify.

Cognito in our example app is the authentication method we are adding to the stack cd into `packages/next-user-login-aws-auth-app` and run the command `amplify add auth`

- select the default configuration
- name for user pool `nextauthusers`
- how do you want users to sign in (select Email)
- Do you want to configure advanced settings (select no)
- run `amplify status` for changes you have made - you will see that Auth is in `Create` mode
- once you run `amplify push` you can access AWS IAM and Cognito identity pools and user pools - as this pushes the local changes to your cloud configuration - you can see the different services being auto compiled and generated to connect auth from your front end to the backend.

- check your user pools `amplify auth console` select `UserPool`

Cognito - User Pool
IAM - Identity Pool

Debugging 401 error [https://github.com/aws-amplify/amplify-js/issues/4270]
Authorisation guiderails - docs[https://docs.amplify.aws/cli/graphql/authorization-rules/#authorization-strategies]

Trouble shooting[https://docs.amplify.aws/lib/troubleshooting/upgrading/q/platform/js/#check-for-duplicate-versions]
