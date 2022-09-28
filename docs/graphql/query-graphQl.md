graphQL and graphQL-express libraries help you to create the server environment in JavaScript and you can make network calls and check how these calls are working in real-time.

With the REST method you can use Postman which is also an environment to test network calls.

Once you have set up your server you can go to the port and in the url `http://localhost:4000/graphql` a server is set up which allows you to query the data and check how the graphQL schemas will query the data once a databse is built.

Before you even set up mocks you can test the server with a RootQuery and types that match the graphQL object making that query.

To query the parent userType in the graphQL server you run the query.
```
{
  user(id: "123")
  {  
    name,
    age,
  }
}
```
You will get null as there is no data in a database to run. The resolver has to be written to query the data and return the relevant information.

```
{
  "data": {
    "user": null
  }
}
```
The next step is to test the data with hard coded mocks and the lodash library to iterate easily through arrays. Once you test the data in the grapqhQL-express server you will see how the query becomes self-documenting - you see the data queried and the types as well as the response that comes back.

```
const graphql = require("graphql");
const _ = require("lodash");

const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
    GraphQLSchema,
} = graphql

# // hard code and test resolve in the graphQL-express server
 const userData = [
  {id: "User1", phoneNumber: 123 , email: "email1@email.com", createdAt: Date.now() },
  {id: "User2", phoneNumber: 456 , email: "email2@email.com", createdAt: Date.now() },
  {id: "User3", phoneNumber: 789 , email: "email3@email.com", createdAt: Date.now() },
  {id: "User4", phoneNumber: 013 , email: "email4@email.com", createdAt: Date.now() },
  ]

# // Create types - this is the parent
const UserType = new GraphQLObjectType({
    name: "User",
    description: "Documentation for user...",
    // data blueprint of the types and data requested
    fields: () => ({
        id: {type:GraphQLString},
        email: {type:GraphQLString},
        phoneNumber: {type:GraphQLInt}
    }) 
})

# // RootQuery - traverse the data
const RootQuery = new GraphQLObjectType({
    name: "RootQueryType",
    description: "Description",
    fields: {
      user: {
        type: UserType,
        args: { id: { type: GraphQLString } },
        resolve(parent, args) {    
          return _.find(userData, 
            {id: args.id}
            )
        },
      },

    },
  });
  
  module.exports = new GraphQLSchema({
    query: RootQuery,
  });
```

Once this is done and tested with hard coded data you can also create relationships between the data entities.

Define which data entitites you need a one-to-one and one-to-many relationships and then create those relationships and query them in graphql-express server.

