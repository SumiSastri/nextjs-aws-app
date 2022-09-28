const express = require('express');
const {graphqlHTTP} = require('express-graphql');
const mongoose = require('mongoose');
const cors = require('cors');
const helmet = require('helmet');
const colors = require('colors');
require('dotenv').config();
const port = process.env.PORT || 4000;
const MONGO_URI = process.env.MONGO_URI

const schema = require ('./data/graphQL-schemas/schema')

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
mongoose.connect(MONGO_URI, 
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }) .then(() => console.log('SUCCESS: MongoDB Connected...'.cyan.underline.bold))
  .catch(err => console.log(err, "DB CHECK: Not connected Check cloud connection, password, IP address".red.underline.bold));


app.listen(4000, () => console.log(`NEXTJS-AWS-APP: Express server connected on port ${port}`.green.underline.bold));
