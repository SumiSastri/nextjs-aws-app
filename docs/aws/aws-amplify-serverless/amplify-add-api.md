---
layout: default
title: Amplify Add API
parent: amplify-add-api
grand_parent: aws
---

# Amplify Add API

cd into your app `cd packages/next-user-login-aws-auth-app`

run command `amplify add api` this method connects your front end to AWS AppSync as part of the "managed-services"

Name: `nextuserloginawsauth`
Choose a Schema template: select Todo

You will see this warning

WARNING: your GraphQL API currently allows public create, read, update, and delete access to all models via an API Key. To configure PRODUCTION-READY authorization rules, review: https://docs.amplify.aws/cli/graphql/authorization-rules

Do you want to endit the schema now (Select No)

The GraphQL schema will automatically be generated

`packages/next-user-login-aws-auth-app/amplify/backend/api/nextuserloginawsauth/schema.graphql`

You will be prompted to update the API select Yes
You will be prompted to auto-generate queries/ mutations and subscriptions - select Yes

This configuration now needs to be pushed and synchronised to your amplify configuration and you will see the changes being deployed to amplify.

Once the process is complete you will get an endpoint and key

```
GraphQL endpoint: https://vcsz6jjjhrefpdyrypuybabmsa.appsync-api.eu-west-2.amazonaws.com/graphql
GraphQL API KEY: da2-ilgeiy5aazfazmamgakyr67wmq
```

Here is where one of the first disadvantages of Amplify manifests itself. If your grapql schema gets corrupted you will need to delete the deploy and rebuild it again.

You have no control and a whole auto-generated set of mutations/ resolvers are set up and you do not get to understand how graphql actually works in the background.

It is therefore advisable to know how graphql works before you use amplify.

if you already have amplify you need to run `amplify update api` and update the package

You need to go to AppSync and check schema in AppSync as this auto-generate of schemas connects the front end to a backend user query/mutation as well as DynamoDb Tables.

**GUIDE RAILS CONNECT AMPLIFY TO APPSYNC**

1. To add appSync `amplify add api` choose graphql
2. Select Authorisation modes (Select default with API-Key)
3. Create name for API-key -> sumi-dev-amplify
4. Select an expiry date 7
5. Configure additional auth types (No)
6. Annotated GraphQL schema (No)
7. Choose a Template (Single object with Fields)
8. Push changes `amplify push` to see the config of your schema - select yes to the prompts to continue and generate code for the newly created API, select typescript and accept defaults
9. Check the console to see the schema `amplify api console` select graphql - you will get the AWS graphql schema and you can also work on the schema here
