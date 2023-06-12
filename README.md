# AWS App with NextJs frontend

A demo app using AWS serverless and NextJs in a monorepo with Lerna as a package manager.

The ui-ux makes use of AWS pre-fab login and register components.

This app is a work in progress along with an app using React and  Google Cloud Platform services as I would like to form an opinion and compare/contrast the two serverless options.

This app has 2 repos:

1. The aws-cdk-demo app compares server-side REST APIs and deploys to Heroku (note as Heroku has stopped offering a free-tier this can be tested on postman not Heroku).

2. The next user-login-aws-auth-app with email-password sign-in with email-link auth verification and using cognito-user pools. (work-in-progress)

My initial impressions of AWS are

1. The CDK v1-v2 differences are useful to know - currently (June 2023) v1 is not supported - migrating from v1-v2 was not a simple process. Package updates with AWS especially such major changes can be difficult to debug and execute.
2. Documentation can be overwhelming - too much and not very well organised
3. Authentication is more difficult to set up with Cognito User pools compared with Google (Firebase) but feels more secure (impression not evidence based)
4. Programmatic image uploads with S3 and AWS CDK seemed much easier than with Google (Firestore)
5. Very complex infra - the learning process is overwhelming - not a great developer experience
