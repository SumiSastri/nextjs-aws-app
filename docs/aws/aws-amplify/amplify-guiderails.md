1. Install and configure Amplify see - `amplify-installation.md`
2. Initialise project with library methods - go to the root of your app and run `amplify init` the command auto-detects settings and sets up the project with defaults. If you have set up a IAM profile use the configuration
3. Packages required by Amplify will be installed in your project and a directory called amplify will be installed in your app
4. Run `amplify add auth` to get the pre-built ui
5. Run `amplify status` for changes
6. Deploy changes `amplify push` this creates a cognito user pool in the cloud
7. Install ui library `npm install aws-amplify @aws-amplify/ui-react`
8. In root of the next-js app add the Authenticator HOC (see `app.tsx`)
9. Wrap the Navbar component and use the `Auth` and `withAuthenticator` methods - add the `handleSignOutSubmit` and check if the signin and signout works as expected - to sign in you need to create your first user with a valid email address. You will get an authentication code which you can use.
   After step 7: These blogs help you set up the ui in the app (Steps 8 and 9)
   Blog: Dev.to [https://dev.to/codebeast/authentication-in-a-nextjs-app-with-aws-amplify-2057]
   React docs [https://ui.docs.amplify.aws/react/connected-components/authenticator]
10. In console run `amplify auth console` you will be connected to the Amplify Console - check user has been created.

**CONNECT TO DB WITH APPSYNC**

1. To add appSync `amplify add api` choose graphql
2. A configuration will be selected - choose to-do schema and no for the option to edit it
3. In your repo you will now have a graphql schema file in the amplify folder
   eg: `/amplify/backend/api/nextuserloginawsauth/schema.graphql` - you can edit this schema to match your use case
4. Push changes `amplify push` to see the config of your schema - select yes to the prompts to continue and generate code for the newly created API, select typescript and accept defaults
5. Check the console to see the schem `amplify api console` select graphql
