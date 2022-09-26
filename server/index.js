const express = require('express');
const {graphqlHTTP} = require('express-graphql');
const mongoose = require('mongoose');
const cors = require('cors');
const helmet = require('helmet');
const colors = require('colors');
const schema = require ('./data/graphQL-schemas/schema')
const port = process.env.PORT || 4000;

// intialise methods
const app = express();
app.use(cors());
app.use(helmet({
  contentSecurityPolicy: false,
}));
// use the grapqlHTTP library methods
app.use('/graphql', graphqlHTTP({
  schema,
  // if environment changes to production this changes to false
  graphiql: true
}));


// connect to db and server
app.listen(4000, () => console.log(`NEXTJS-AWS-APP: Express server connected on port ${port}`));
