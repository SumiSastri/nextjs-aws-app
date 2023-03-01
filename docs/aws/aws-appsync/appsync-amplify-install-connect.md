Once you have configured amplify - see amplify section `docs/aws/aws-amplify/amplify-installation.md` you can add an api method either REST or GraphQL to amplify `amplify add api` if you already have amplify you need to run `amplify update api` and update the package

**CONNECT APPSYNC**

1. To add appSync `amplify add api` choose graphql
2. Select Authorisation modes (Select default with API-Key)
3. Create name for API-key -> sumi-dev-amplify
4. Select an expiry date 7
5. Configure additional auth types (No)
6. Annotated GraphQL schema (No)
7. Choose a Template (Single object with Fields)
8. Amplify push

9. In your repo you will now have a graphql schema file in the amplify folder
   eg: `/amplify/backend/api/schema.graphql` - you can edit this schema to match your use case

10. Push changes `amplify push` to see the config of your schema - select yes to the prompts to continue and generate code for the newly created API, select typescript and accept defaults
11. Check the console to see the schema `amplify api console` select graphql - you will get the AWS graphql schema and you can also work on the schema here
12. Check `amplify auth console` select `UserPool`
13. Check schema of graphql `amplify api console` select graphql
    Authorisation guiderails - docs[https://docs.amplify.aws/cli/graphql/authorization-rules/#authorization-strategies]
