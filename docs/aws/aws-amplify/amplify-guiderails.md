1. Install and configure Amplify see - `amplify-installation.md`
2. Initialise project with library methods - go to the root of your app and run `amplify init` the command auto-detects settings and sets up the project with defaults. If you have set up a IAM profile use the configuration
3. Packages required by Amplify will be installed in your project and a directory called amplify will be installed in your app
4. Run `amplify add auth` to get the pre-built ui
5. Run `amplify status` for changes
6. Deploy changes `amplify push` this creates a cognito user pool in the cloud
7. Install ui library `npm install aws-amplify @aws-amplify/ui-react`
8. In root of the next-js app add the Authenticator HOC
