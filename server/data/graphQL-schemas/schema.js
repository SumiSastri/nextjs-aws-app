const graphql = require("graphql");
const _ = require("lodash");

const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLSchema,
  GraphQLID,
} = graphql

// hard code and test resolve in the graphQL-express server
const usersData = [
  { id: "User1", name: "Janaki", profession: "Butcher", phoneNumber: 123, email: "janaki@email.com", age: 11, createdAt: Date.now() },
  { id: "User2", name: "Jyostna", profession: "Baker", phoneNumber: 456, email: "jyotsna@email.com", age: 22, createdAt: Date.now() },
  { id: "User3", name: "Jananani", profession: "Candlestick Maker", phoneNumber: 789, email: "janani@email.com", age: 31, createdAt: Date.now() },
  { id: "User4", name: "Jhanavi", profession: "Fish Monger", phoneNumber: 013, email: "jhanavi@email.com", age: 14, createdAt: Date.now() },
]

const hobbiesData = [
  { id: "Hobby1", title: "Cooking", description: "Barbecues and Grills", createdAt: Date.now() },
  { id: "Hobby2", title: "Baking", description: "Breads and sweets baking", createdAt: Date.now() },
  { id: "Hobby3", title: "Decorating", description: "Home decorations", createdAt: Date.now() },
  { id: "User4", title: "Fishing", description: "Fresh water fly fishing", createdAt: Date.now() },
]

// Create types
const UserType = new GraphQLObjectType({
  name: "User",
  description: "Documentation for user...",
  // data blueprint of the types and data requested
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    email: { type: GraphQLString },
    phoneNumber: { type: GraphQLInt },
    profession: { type: GraphQLString },
    age: { type: GraphQLInt }
  })
})

const HobbyType = new GraphQLObjectType({
  name: "Hobby",
  description: "Hobbies and interests ...",
  fields: () => ({
    id: { type: GraphQLID },
    title: { type: GraphQLString },
    description: { type: GraphQLString },
  })
})

// RootQuery - traverse the data
const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  description: "Description",
  fields: {
    // Users
    user: {
      type: UserType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        // return users data   
        return _.find(usersData,
          { id: args.id }
        )
      },
    },
    // Hobbies
    hobby: {
      type: HobbyType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        // return hobbies data 
        return _.find(hobbiesData,
          { id: args.id }
        )
      },
    },


  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
});
