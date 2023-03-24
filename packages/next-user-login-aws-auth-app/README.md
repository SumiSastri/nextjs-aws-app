# AWS architecture diagram

<img src="docs/assets/nextJs-auth-architecture.png" alt="NextJs and AWS Authorisation App Architecture Diagram" height="350"/>

## Repo access

Pre-requisites:
This repo uses `npm` and `lerna` as package managers.

- Fundamentals of HTML, CSS (Bootstrap), JavaScript (ES6), TypeScript, React, NextJs, NodeJs, npm & monorepo package management, version control with GitHub, API calls - GraphQL
- GitHub account
- Text editor
- AWS account
- NodeJs <=10
- npm <=5

If you have cloned the main repo -

`npx lerna bootstrap` (adds node modules to each submodule)

`cd packages/next-user-login-aws-auth-app` (if this does not work)

- `npm install --y`(install node modules)

Updating packages `npx npm-check-updates -i '/@?aws-amplify/' && npm update`

## AWS backend set up

To switch from AWS service configs use vim command in root `vi ~/.aws/credentials`

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

**Amplify configuration**

Initialise the repo `amplify init` - this takes you to your amplify configuration if you already have initialised it then you need to sync the app with `amplify pull`

Log into your AWS Account - in the AWS Console go to your amplify app and get the id for your app you can then run the command `amplify pull --appId --envName`

Run `amplify configure <your-config-name>` (eg: `amplify configure sumi-dev-amplify`) this is a bespoke configuration that connects Amplify to the AWS cloud based on your configuration.

Run `amplify push`

**Useful commands**

- `amplify pull --appId <getIdFromAWSConsole> --envName dev`
- `amplify status` for changes
- `amplify push` deploys changes
- `amplify add name of service` - add an AWS service

**Check Cognito user pools**

- `amplify auth console` you will be connected to the Amplify Console - check user has been created.
- `amplify auth console` select `UserPool` Check cognito user pools
- `amplify update auth` to update the auth configuration
  On prompt what do you want to do `Create or update Cognito user pool groups`

**AppSync configuration**
`amplify add api` - for the first time to set up the API - as the API has already been set up and if you are pulling this repo, you need to update the config
`amplify update api` update the api configuration
`amplify api console` - this takes you to the APIs set up and you can check the GraphQL API data

## Frontend access

`cd packages/next-user-login-aws-auth-app`

Once you have configured your amplify environment locally
`npm run dev` Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

**Mark-up**

Styles

`npm install react-bootstrap bootstrap` bootstrap styling to be added to `app.tsx` at root

Read handling bootstrap integration with NextJS (as this framework ships with its own CSS)
[https://blog.logrocket.com/handling-bootstrap-integration-next-js/]

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
}
```

- In root of the next-js app add the Authenticator HOC (see `packages/next-user-login-aws-auth-app/pages/_app.tsx`)

- Wrap the Navbar component and use the `Auth` and `withAuthenticator` methods - add the `handleSignOutSubmit` and check if the signin and signout works as expected - to sign in you need to create your first user with a valid email address. You will get an authentication code which you can use.

- These blogs help you set up the ui in the app
  - Blog: Dev.to [https://dev.to/codebeast/authentication-in-a-nextjs-app-with-aws-amplify-2057]
  - React docs [https://ui.docs.amplify.aws/react/connected-components/authenticator]

The higher order component - Authenticator - wraps your component with authentication and auth-routes.

NextJS has a slightly different config (see demo app in this repo)

The Authenticator HoC once set up provides you with an easy way to both create and verify new users in your Cognito user pool.

In this app as we have configured (with the AWS defaults) the Cognito auth to pass only with an email and password a dummy phone number can be provided.

Cognito user pool will register the new user with a unique id.

So Amplify with the CLI easily configures auth and then with the library connects all the Cloud services - Cognito/ AppSync/ DynamoDb - with very little dev effort.
