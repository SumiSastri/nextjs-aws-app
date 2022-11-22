const express = require('express');
const {graphqlHTTP} = require('express-graphql');
const {mongoose} = require('mongoose');
const {colors} = require('colors');
const cors = require('cors');
const helmet = require('helmet');
// config
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

mongoose.connect(`mongodb+srv://music-app-user:ibzmMOfoHN7Gug2K@cluster0.slip5.mongodb.net/test`, 
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }) .then(() => console.log('SUCCESS: MongoDB Connected...'.cyan.underline.bold))
  .catch(err => console.log(err, "FAIL: Not connected Check cloud connection, password, IP address".red.underline.bold));
  
app.listen(process.env.PORT || 4000, '0.0.0.0', () => {
  console.log(`NEXT-JS_AWS_APP: Express server connected`.green.underline.bold);
});