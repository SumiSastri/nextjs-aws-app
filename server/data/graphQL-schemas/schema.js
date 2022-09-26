const graphql = require("graphql");
const {
    GraphQLObjectType,
    GraphQLID,
    GraphQLString,
    GraphQLInt,
} = graphql

// Create types
const UserType = new GraphQLObjectType({
    name: "User",
    description: "Documentation for user...",
    // data
    fields: () => ({
        id: {type:GraphQLID},
        name: {type:GraphQLString},
        age: {type:GraphQLInt}
    }) 

})