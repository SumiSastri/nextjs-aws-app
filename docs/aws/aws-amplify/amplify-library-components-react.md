The AWS-Amplify library ships with 40 production-ready components that you can use out of the box.

The higher order component - Authenticator - wraps your component with authentication and auth-routes.

NextJS has a slightly different config (see demo app in this repo)

The Authenticator HoC once set up provides you with an easy way to both create and verify new users in your Cognito user pool.

In this app as we have configured (with the AWS defaults) the Cognito auth to pass only with an email and password a dummy phone number can be provided.

Cognito user pool will register the new user with a unique id.

So Amplify with the CLI easily configures auth and then with the library connects all the Cloud services - Cognito/ AppSync/ DynamoDb - with very little dev effort.
