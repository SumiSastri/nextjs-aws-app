const graphql = require("graphql");
const _ = require("lodash");

const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
    GraphQLSchema,
} = graphql

// hard code and test resolve in the graphQL-express server
 const userData = [
  {id: "User1", phoneNumber: 123 , email: "email1@email.com", createdAt: Date.now() },
  {id: "User2", phoneNumber: 456 , email: "email2@email.com", createdAt: Date.now() },
  {id: "User3", phoneNumber: 789 , email: "email3@email.com", createdAt: Date.now() },
  {id: "User4", phoneNumber: 013 , email: "email4@email.com", createdAt: Date.now() },
  ]

// Create types - this is the parent
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

// RootQuery - traverse the data
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
