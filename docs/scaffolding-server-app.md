# Scaffolding

## server app

This is the GraphQL Section which demos a full server-side creation of a GraphQL API deployed on Heroku

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
