**CONNECT TO Cognito User Pools**

1. Install amplify - see amplify section `docs/aws/aws-amplify/amplify-installation.md`

2. Run `amplify add auth` or `amplify update auth` to update user configurations in the Cognito user pools
3. Run `amplify status` for changes you have made
4. Once you run `amplify push` you can access AWS IAM and Cognito identity pools and user pools
5. Check your user pools `amplify auth console` select `UserPool`

Cognito - User Pool
IAM - Identity Pool

Debugging 401 error [https://github.com/aws-amplify/amplify-js/issues/4270]
