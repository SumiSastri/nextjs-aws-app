const graphql = require("graphql");
const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
    GraphQLSchema,
} = graphql

// Create types - this is the parent
const UserType = new GraphQLObjectType({
    name: "User",
    description: "Documentation for user...",
    // data blueprint of the types and data requested
    fields: () => ({
        id: {type:GraphQLString},
        name: {type:GraphQLString},
        age: {type:GraphQLInt}
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
        
        },
      },

    },
  });
  
  module.exports = new GraphQLSchema({
    query: RootQuery,
  });
