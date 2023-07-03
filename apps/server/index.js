const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const { mongoose } = require("mongoose");
const { colors } = require("colors");
const cors = require("cors");
const helmet = require("helmet");
// config
require("dotenv").config();
const port = process.env.PORT || 4000;
const MONGO_URI = process.env.MONGO_URI;
const hostname = "127.0.0.1";

const schema = require("./data/graphQL-schemas/schema");

const app = express();
app.use(cors());
app.use(
  helmet({
    contentSecurityPolicy: false,
  })
);
app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    // if environment changes to production this changes to false
    graphiql: true,
  })
);

// update IP address with a VPN
mongoose
  .set("strictQuery", false)
  .connect(MONGO_URI)
  .then(() => console.log("SUCCESS: MongoDB Connected...".cyan.underline.bold))
  .catch((err) =>
    console.log(
      err,
      "DEBUG-CHECK: cloud connection, password, IP address (OR) node --trace-deprecation"
        .red.underline.bold
    )
  );
// console.log(mongoose.connect());
app.listen(process.env.PORT || 4000, "0.0.0.0", hostname, () => {
  console.log(
    `NEXT-JS_AWS_APP: Express server connected on port: ${port}`.green.underline
      .bold
  );
});
// console.log(app.listen());
