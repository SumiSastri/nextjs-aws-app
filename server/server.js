const express = require('express');
const {graphqlHTTP} = require('express-graphql');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
const port = process.env.PORT || 4000;
const MONGO_URI = process.env.MONGO_URI
// const connectDB = require('./config/mongoDb');
const helmet = require('helmet');
const colors = require('colors');

// files
const schema = require('./graphql-schemas/schema');

// middleware
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

// db connect
// connectDB();
mongoose.connect(MONGO_URI, 
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }) .then(() => console.log('SUCCESS: MongoDB Connected...'.cyan.underline.bold))
  .catch(err => console.log(err, "DB CHECK: Not connected Check cloud connection, password, IP address"));



app.listen(4000, () => console.log(`GrapQL-MongoDB-App: Express server connected on port ${port}`));
