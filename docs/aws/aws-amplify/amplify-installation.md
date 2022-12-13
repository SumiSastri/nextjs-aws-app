Docs
[https://docs.amplify.aws/cli/start/install/#install-the-amplify-cli] &
[https://docs.amplify.aws/cli/start/install/#option-2-follow-the-instructions]

1. Installation
   Install the amplify cli globally
   `npm install -g @aws-amplify/cli`

2. Configuration
   In (computer) root run
   `amplify configure` - creates a new AWS-IAM user
   Go through the configure steps and create a user on the AWS Amplify service in your AWS online account

   - You will need the region and secrets keys
   - You will see a new IAM user added in the Cognito user pools

3. Initialisation - go to the root of your app and run `amplify init` the command auto-detects settings and sets up the project with defaults. Packages required by Amplify will be installed in your project and a directory called amplify will be installed in your app . The example in this app `packages/next-user-login-aws-auth-app/amplify`

4. Adding an api (REST or GraphQL) `amplify add api` if you already have amplify you need to run `amplify update api` and update the package

5. Install ui library `npm install aws-amplify @aws-amplify/ui-react`.

- In root of the next-js app add the Authenticator HOC (see `app.tsx`)
- Wrap the Navbar component and use the `Auth` and `withAuthenticator` methods - add the `handleSignOutSubmit` and check if the signin and signout works as expected - to sign in you need to create your first user with a valid email address. You will get an authentication code which you can use.
- These blogs help you set up the ui in the app
  - Blog: Dev.to [https://dev.to/codebeast/authentication-in-a-nextjs-app-with-aws-amplify-2057]
  - React docs [https://ui.docs.amplify.aws/react/connected-components/authenticator]

**Useful commands**

- `amplify status` for changes
- `amplify auth console` you will be connected to the Amplify Console - check user has been created.
- `amplify push` deploys changes
- `amplify auth console` select `UserPool` Check cognito user pools
- `amplify add name of service` - add an AWS service

Once you have done this to continue to connect your local machine to AWS

1. Login to your AWS account
2. In root `amplify configure your-profile-name` eg: `amplify configure sumi-dev-amplify`
3. Run `amplify push` this deploys the last changes and makes sure your app has the latest version of the changes connected from your local machine to the cloud
   NOTE: you may be requested to re-establish your configuration with the access-key and secret-access
