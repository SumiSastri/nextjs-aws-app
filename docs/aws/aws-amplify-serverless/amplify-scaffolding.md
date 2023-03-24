---
layout: default
title: Amplify Scaffolding
parent: aws-amplify-serverless
grand_parent: aws
---

# Amplify Scaffolding

Pre-requisites

- node
- npm
- aws account

_Step 1_

Install the amplify cli globally
`npm install -g @aws-amplify/cli`

**Installation docs**
The official docs also have video tutorials
[https://docs.amplify.aws/cli/start/install/#install-the-amplify-cli] &
[https://docs.amplify.aws/cli/start/install/#option-2-follow-the-instructions]

_Step 2_

Authenticate your access to your AWS Account for the amplify services

- Login to your AWS account
- In terminal (root) create a new authenticated user with the command`amplify configure`
- Follow the instructions

* Set region
* Set user name `sumi-dev`
* Complete the user creation using the AWS console (you will get a url link to create the authenticated user) and you can set up permissions for this user
* Save the Access Key and Secret Access Key
* Go to Admin Console and check Users - you should see the user set up
* Go back to terminal - to link your local to the AWS Cloud paste your Access Key and Secret Access Key
* Give your local machine a user name `sumi-dev`

For more on profiles [https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-profiles.html]

_Step 3_

Initialisation - go to the root of your app and run `amplify init` the command auto-detects settings and sets up the project with defaults.

The configuration requires your config name `sumi-dev`

Packages required by Amplify will be installed in your project and a directory called amplify will be installed in your app.

_Step 4_

Check the installation is successfull and review the configuration folders in your app

The example in this app `packages/next-user-login-aws-auth-app/amplify`
Name of project: `nextuserloginawsauth` (set name of your project)
Initialise the project with the above configuration (yes)
Authenticate your access: `sumi-dev`

You will see the packages building `Adding backend environment dev to AWS Amplify app: dm975afs8mf0y`
And you will get a success message

`Your project has been successfully initialized and connected to the cloud!`

Go to your AWS Admin Console you should see the app `nextuserloginawsauth` created in the Amplify Section
In your local machine you will see an amplify folder which has built the basic back end configuration and deployed it
Go into your project directory - the example project here is:

`cd packages/next-user-login-aws-auth-app`

Run an `amplify status` you will see the basic build

**Useful commands**

- `amplify status` for changes
- `amplify push` deploys changes
- `amplify pull --appId xxx --envName xxx`

- `amplify add name of service` - add an AWS service
- `amplify remove name of service` - delete a backend service if you want to reconfigure
- `amplify update name of service` - update an AWS service

- `amplify auth console` you will be connected to the Amplify Console - check user has been created.
- `amplify auth console` select `UserPool` Check cognito user pools
- `amplify api console` select graphql
  _Step 5_

Add resources from the platform

1. The UI Library
2. A GraphQL schema and API
3. Auth with Cognito

_Step 6_

Go to guiderails to manage these services as the auth tokens expire and you will have to ensure that you are authorised and logged into the AWS Cloud.
