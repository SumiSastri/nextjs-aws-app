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
3. Once you have configured amplify - see amplify section you can add an api method either REST or GraphQL to amplify `amplify add api` if you already have amplify you need to run `amplify update api` and update the package

**CONNECT TO DB WITH APPSYNC**

1. To add appSync `amplify add api` choose graphql
2. A configuration will be selected - choose to-do schema and no for the option to edit it
3. In your repo you will now have a graphql schema file in the amplify folder
   eg: `/amplify/backend/api/nextuserloginawsauth/schema.graphql` - you can edit this schema to match your use case
4. Push changes `amplify push` to see the config of your schema - select yes to the prompts to continue and generate code for the newly created API, select typescript and accept defaults
5. Check the console to see the schema `amplify api console` select graphql
