# Scaffolding

## GraphQL Section

__Server__

- create a folder for the server `mkdir server`
- create the entry point - `index.js` or `app.js` 
- initialise with node `npm init` 
- add `.gitignore` file and server side folde
- `npm install --y` install node modules
- install server-side dependencies `npm install express mongoose helmet cors dotenv colors nodemon graphql express-graphql lodash body-parser express-router`

- check your package-json to see the dependencies have been installed.

__PORT__

URL: [http://localhost:4000/graphql] to test end points

__MongoDB__

- Create an account and then login
- MONGODB: https://account.mongodb.com/account/login
- To connect cloud based Mongo services to local

Connect DB:
Connect with compass

- Save the <username:password> when you create your database and use a dotenv file to save secrets

__Api endpoint on Heroku__

- Create a Heroku account
- Check `heroku_README.md` for more details on deploying to Heroku

__Graphql Bin__
Graphql bin is a tool where the API endpoint can be accessed
[https://www.graphqlbin.com/v2/new]

## AWS CDK & TypeScript Section

__AWS Account__
- Create AWS account - 12 month free option [https://aws.amazon.com/free/]
- A credit card is taken and multi-factor-authentication required
- Follow steps to create free acount note that AWS can charge your credit card at any time and change its policy
- Set up budget tracker for a low amount like $1/Eur1


- You need to save securely the following to use in the project configuration to sync local to AWS Cloud services
AWS Access Key ID : 
AWS Secret Access Key: 
Default region name:

__AWS CLI__

For macs[https://awscli.amazonaws.com/AWSCLIV2.pkg]

__AWS CDK__

To configure see the aws-cdk-cloud-development-kit section and the document `aws-cdk-workflow.md`

AWS-CDK -> API-Gateway -> TypeScript Lamda -> DynamoDB