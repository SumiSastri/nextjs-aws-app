# Scaffolding

## Client-Side

Nextjs global installation `npm install -g create-next-app`
Create a Nextjs app in a folder
`npx create-next-app your-app-name` You can select whether you would like to add TypeScript/ ESLint to the project during the scaffolding. This app selects both.
Styles `npm install react-bootstrap bootstrap`
See blog Handling Bootstrap with Nextjs[https://blog.logrocket.com/handling-bootstrap-integration-next-js/]

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

Scripts `npm run dev` - local environment
```

## Server-Side

There are 2 sections - the GraphQL Section which demos a full server-side creation of a GraphQL API deployed on Heroku as well as AWS serverless (infrastructure as code section).

### GraphQL Section

**Server**

- create a folder for the server `mkdir server`
- create the entry point - `index.js` or `app.js`
- initialise with node `npm init`
- add `.gitignore` file and server side folde
- `npm install --y` install node modules
- install server-side dependencies `npm install express mongoose helmet cors dotenv colors nodemon graphql express-graphql lodash body-parser express-router`

- check your package-json to see the dependencies have been installed.

**PORT**

URL: [http://localhost:4000/graphql] to test end points

**MongoDB**

- Create an account and then login
- MONGODB: https://account.mongodb.com/account/login
- To connect cloud based Mongo services to local

Connect DB:
Connect with compass

- Save the <username:password> when you create your database and use a dotenv file to save secrets

**Api endpoint on Heroku**

- Create a Heroku account
- Check `heroku_README.md` for more details on deploying to Heroku

**Graphql Bin**
Graphql bin is a tool where the API endpoint can be accessed
[https://www.graphqlbin.com/v2/new]

## AWS CDK & TypeScript Section

**AWS Account**

- Create AWS account - 12 month free option [https://aws.amazon.com/free/]
- A credit card is taken and multi-factor-authentication required
- Follow steps to create free acount note that AWS can charge your credit card at any time and change its policy
- Set up budget tracker for a low amount like $1/Eur1

- You need to save securely the following to use in the project configuration to sync local to AWS Cloud services
  AWS Access Key ID :
  AWS Secret Access Key:
  Default region name:

**AWS CLI**

For macs[https://awscli.amazonaws.com/AWSCLIV2.pkg]

**AWS CDK**

To configure see the aws-cdk-cloud-development-kit section and the document `aws-cdk-workflow.md`

TypeScript AWS-CDK - in root
`npm install @aws-cdk/aws-lambda`
`npm install @aws-cdk/aws-lambda-nodejs`
`npm i esbuild` (JavaScript & TypeScript minifier and bundler)

TypeScript Lamda
`npm install -save-dev "@types/aws-lambda": "^8.10.108"`
`npm install -save-dev "aws-sdk": "^2.1258.0" `
