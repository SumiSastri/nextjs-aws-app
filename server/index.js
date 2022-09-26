const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const port = process.env.PORT || 4000;

const helmet = require('helmet');
const colors = require('colors');

const app = express();
app.use(cors());
app.use(helmet({
  contentSecurityPolicy: false,
}));


app.listen(4000, () => console.log(`NEXTJS-AWS-APP: Express server connected on port ${port}`));
