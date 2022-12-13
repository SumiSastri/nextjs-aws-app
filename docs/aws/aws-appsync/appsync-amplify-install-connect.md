Once you have configured amplify - see amplify section `docs/aws/aws-amplify/amplify-installation.md` you can add an api method either REST or GraphQL to amplify `amplify add api` if you already have amplify you need to run `amplify update api` and update the package

**CONNECT APPSYNC**

1. To add appSync `amplify add api` choose graphql
2. A configuration will be selected - choose to-do schema and no for the option to edit it
3. In your repo you will now have a graphql schema file in the amplify folder
   eg: `/amplify/backend/api/nextuserloginawsauth/schema.graphql` - you can edit this schema to match your use case
4. Push changes `amplify push` to see the config of your schema - select yes to the prompts to continue and generate code for the newly created API, select typescript and accept defaults
5. Check the console to see the schema `amplify api console` select graphql - you will get the AWS graphql schema and you can also work on the schema here
6. Check `amplify auth console` select `UserPool`
7. Check schema of graphql `amplify api console` select graphql
   Authorisation guiderails - docs[https://docs.amplify.aws/cli/graphql/authorization-rules/#authorization-strategies]
