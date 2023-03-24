---
layout: default
title: Amplify Guiderails Manage Services
parent: aws-amplify-serverless
grand_parent: aws
---

# Amplify Guiderails Manage Services

Once you install, initialise and add services to your amplify app, you need to maintain and update the app.

AWS authentication may expire/ you may have to delete corrupted deploys and for a host of other reasons, it is useful to know how to maintain your amplify app on an ongoing basis.

**Configure updates**

In terminal root use vim `vi ~/.aws/credentials`

- exit vim `escape :` after the colon type`1,$d` to delete the previous session token and all authentication
- you can also delete a specific number of lines `:[Start],[end]d` eg: `:1,4d` - to only delete the session token

Check for duplicate packages if the output is zero you have no duplicate packages

```
npm ls -all 2>/dev/null | \
  grep -o -e '@\?aws-amplify[^ ]*' | \
  sort | uniq | \
  sed -E 's/^(@?[^@]+).*$/\1/g' | \
  uniq -d | sort
```

Login to your AWS account

Run `amplify configure <your-config-name>` (eg: `amplify configure sumi-dev-amplify`) this is a bespoke configuration that connects Amplify to the AWS cloud based on your configuration.
Run `amplify push`

NOTE: you may be requested to re-establish your configuration with the access-key and secret-access if they expire

**amplify pull**

If you have already set up amplify you will need to use the "amplify pull <app-id>" command.
Amplify pull `amplify pull --appId xxx --envName xxx`

1. Login to your AWS Account
2. Go to the AWS Management Console
3. Select AWS Amplify
4. Go to your app and the section "Edit back end"
5. Run amplify pull `amplify pull --appId xxx --envName xxx`
6. Hit enter on first prompt - this selects the default
7. Select your profile name - this syncs the local to your cloud configuration
8. Select your editor of choice
9. Select your configuration language
10. Select the framework you are using
11. Follow the rest of the prompts and select the suitable option for your framework

**Update and check Cognito user pools**

- `amplify auth console` you will be connected to the Amplify Console - check user has been created.
- `amplify auth console` select `UserPool` Check cognito user pools
- `amplify update auth` to update the auth configuration
  On prompt what do you want to do `Create or update Cognito user pool groups`

**Update and check AppSync configuration**
`amplify add api` - for the first time to set up the API - as the API has already been set up and if you are pulling this repo, you need to update the config
`amplify update api` update the api configuration
`amplify api console` - this takes you to the APIs set up and you can check the GraphQL API data

In this app as we have configured (with the AWS defaults) the Cognito auth to pass only with an email and password a dummy phone number can be provided.

Cognito user pool will register the new user with a unique id.

So Amplify with the CLI easily configures auth and then with the library connects all the Cloud services - Cognito/ AppSync/ DynamoDb - with very little dev effort.
