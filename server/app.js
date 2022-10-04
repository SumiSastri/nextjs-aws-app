const express = require('express');
const {graphqlHTTP} = require('express-graphql');
const {mongoose} = require('mongoose');
const {colors} = require('colors');
const cors = require('cors');
const helmet = require('helmet');

require('dotenv').config();
const port = process.env.PORT || 4000;
const MONGO_URI = process.env.MONGO_URI

const schema = require('./data/graphQL-schemas/schema');

const app = express();
app.use(cors());
app.use(helmet({
  contentSecurityPolicy: false,
}));
app.use('/graphql', graphqlHTTP({
  schema,
  // if environment changes to production this changes to false
  graphiql: true
}));

mongoose.connect(MONGO_URI, 
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }) .then(() => console.log('SUCCESS: MongoDB Connected...'.cyan.underline.bold))
  .catch(err => console.log(err, "FAIL: Not connected Check cloud connection, password, IP address".red.underline.bold));

app.listen(4000, () => console.log(`NEXT-JS_AWS_APP: Express server connected on port ${port}`.green.underline.bold));
