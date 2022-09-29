# nextjs-aws-app
Full stack app with AWS Amplify-Cognito-GraphQL-MongoDB-Express

# Scaffolding

__Server__
- `npm init` initialise with node
- add `.gitignore` file and server side folde
- `npm install --y` install node modules
- `npm install express mongoose helmet cors dotenv colors nodemon graphql express-graphql lodash body-parser express-router` server-side dependencies

__MongoDB__

- Create an account and then login
MONGODB: https://account.mongodb.com/account/login

Connect DB:
Connect with compass

Details required for account - email, password, org name
Save - Public key and private key
Whitelist IP - whatsmyIP (to identify your IP)

CreateDB:
Create new
Shared

Save username and password - config in a `dotenv` file
