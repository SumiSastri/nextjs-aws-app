const graphql = require("graphql");
const _ = require("lodash");

const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLSchema,
  GraphQLID,
  GraphQLList,
  GraphQLNonNull,
} = graphql

// create relationships -> Users have hobbies and posts related to their hobbies -> this is the graph of the data
// who wrote the post what hobbies does the user have -> connect with userId (one to many entity relationship)
const usersData = [
  { id: "User1", name: "Janaki", profession: "Butcher", phoneNumber: 123, email: "janaki@email.com", age: 11, createdAt: Date.now() },
  { id: "User2", name: "Jyostna", profession: "Baker", phoneNumber: 456, email: "jyotsna@email.com", age: 22, createdAt: Date.now() },
  { id: "User3", name: "Jananani", profession: "Candlestick Maker", phoneNumber: 789, email: "janani@email.com", age: 31, createdAt: Date.now() },
  { id: "User4", name: "Jhanavi", profession: "Fish Monger", phoneNumber: 013, email: "jhanavi@email.com", age: 14, createdAt: Date.now() },
]

const hobbiesData = [
  { id: "Hobby1", title: "Cooking", description: "Barbecues and Grills", createdAt: Date.now(), userId: "User1" },
  { id: "Hobby2", title: "Baking", description: "Breads and sweets baking", createdAt: Date.now(), userId: "User2" },
  { id: "Hobby3", title: "Decorating", description: "Home decorations", createdAt: Date.now(), userId: "User3" },
  { id: "Hobby4", title: "Fishing", description: "Fresh water fly fishing", createdAt: Date.now(), userId: "User4" },
  { id: "Hobby5", title: "Decorating", description: "Home decorations", createdAt: Date.now(), userId: "User3" },
]

const postsData = [
  { id: "Post1", post: "Lorem ipsum cooking 1.... ", comment: "Cooking barbeques and grills is fun and easy", description: "Cooking posts", createdAt: Date.now(), userId: "User1" },
  { id: "Post5", post: "Lorem ipsum cooking 5.... ", comment: "Cooking grilled meat is messy but healthy", description: "Cooking posts", createdAt: Date.now(), userId: "User1" },
  { id: "Post6", post: "Lorem ipsum cooking 6.... ", comment: "BBQs take too long!", description: "Cooking posts", createdAt: Date.now(), userId: "User1" },
  { id: "Post2", post: "Lorem ipsum baking 2.... ", comment: "Baking bread and cakes smells great and tastes great", description: "Baking posts", createdAt: Date.now(), userId: "User2" },
  { id: "Post7", post: "Lorem ipsum baking 7.... ", comment: "Baking bread with a machine is easier!", description: "Baking posts", createdAt: Date.now(), userId: "User2" },
  { id: "Post8", post: "Lorem ipsum baking 8.... ", comment: "Cakes are best with lots of butter", description: "Baking posts", createdAt: Date.now(), userId: "User2" },
  { id: "Post3", post: "Lorem ipsum decorating 3.... ", comment: "Decorating with handmade craft is relaxing", description: "Decorating posts", createdAt: Date.now(), userId: "User3" },
  { id: "Post9", post: "Lorem ipsum decorating 9.... ", comment: "Decorating candles with glitter can be dangerous", description: "Decorating posts", createdAt: Date.now(), userId: "User3" },
  { id: "Post10", post: "Lorem ipsum decorating 10.... ", comment: "Candle making is an art", description: "Decorating posts", createdAt: Date.now(), userId: "User3" },
  { id: "Post11", post: "Lorem ipsum decorating 11.... ", comment: "Scented candles need good quantities of quality scent mixed", description: "Decorating posts", createdAt: Date.now(), userId: "User3" },
  { id: "Post4", post: "Lorem ipsum fishing 4.... ", comment: "Fishing in fresh water is quiet and requires patience", description: "Fishing posts", createdAt: Date.now(), userId: "User4" },
]

// Create types - each type is a parent
const UserType = new GraphQLObjectType({
  name: "User",
  description: "Documentation for user...",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    profession: { type: GraphQLString },
    phoneNumber: { type: GraphQLInt },
    email: { type: GraphQLString },
    age: { type: GraphQLInt },

    // one to many relationship - what are the list/ array of posts related to one userId
    posts: {
      type: new GraphQLList(PostType),
      resolve(parent, args) {
        // PostType - defines the parent of the list
        return _.filter(postsData, {
          userId: parent.id
        })
      }
    },
    // one to many relationship - what are the list/ array of hobbies related to one userId
    hobbies: {
      type: new GraphQLList(HobbyType),
      resolve(parent, args) {
        return _.filter(hobbiesData, {
          userId: parent.id
        })
      }
    }

  })
})

// one to many entity relationship user to hobby - with one query we can look up 2 entities
const HobbyType = new GraphQLObjectType({
  name: "Hobby",
  description: "Hobbies and interests ...",
  fields: () => ({
    id: { type: GraphQLID },
    title: { type: GraphQLString },
    description: { type: GraphQLString },
    // within the type we are querying the usersId to find out what their hobby is
    // traversing the graph so resolver is written in the type not the root query
    user: {
      type: UserType,
      resolve(parent, args) {
        return _.find(usersData, { id: parent.userId })
      }
    },
  })
})

// one to many entity relationship user to hobby & post
const PostType = new GraphQLObjectType({
  name: "Post",
  description: "Interesting information and posts ...",
  // data blueprint of the types and data queried
  fields: () => ({
    id: { type: GraphQLID },
    post: { type: GraphQLString },
    comment: { type: GraphQLString },
    description: { type: GraphQLString },
    // within the type we are querying the usersId to find from the backend who wrote the post
    // traversing the graph a graphql resolver is written in the type not the root query
    user: {
      type: UserType,
      resolve(parent, args) {
        return _.find(usersData, { id: parent.userId })
      }
    },
  })
})

// RootQuery - traverse the data
const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  description: "Description",
  fields: {
    // User by Id
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
    // Hobby by Id
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

    // Post by Id
    post: {
      type: PostType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        // return posts data 
        return _.find(postsData,
          { id: args.id }
        )
      },
    },

    // Query all - list/ array
    users: {
      type: new GraphQLList(UserType),
      resolve(parent, args) {
        return usersData
      }
    },

    posts: {
      type: new GraphQLList(PostType),
    resolve(parent, args) {
        return postsData
      }
    },

    hobbies: {
      type: new GraphQLList(HobbyType),
      resolve(parent, args) {
        return hobbiesData
      }
    }

  },
});

// Mutate data - to create, update and delete data in backend resources
const Mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {

    // CREATE
    createUser: {
      type: UserType,
      args: {
        // id: {type:GraphQLID},
        name: { type: new GraphQLNonNull(GraphQLString) },
        profession: { type: new GraphQLNonNull(GraphQLString) },
        phoneNumber: { type: new GraphQLNonNull(GraphQLInt) },
        email: { type: new GraphQLNonNull(GraphQLString) },
        age: { type: new GraphQLNonNull(GraphQLInt) },
      },
      resolve(parent, args) {
        let user = {
          name: args.name,
          profession: args.profession,
          phoneNumber: args.phoneNumber,
          email: args.email,
          age: args.age,
        }
        return user;
      },
    },

    createPost: {
      type: PostType,
      args: {
        // id: {type:GraphQLID},
        userId: { type: GraphQLID },
        post: { type: new GraphQLNonNull(GraphQLString) },
        comment: { type: new GraphQLNonNull(GraphQLString) },
        description: { type: new GraphQLNonNull(GraphQLString) },
      },
      resolve(parent, args) {
        let post = {
          id: { type: GraphQLID },
          post: args.post,
          comment: args.comment,
          description: args.description,
          userId: args.userId,
        }
        return post;
      },
    },

    createHobby: {
      type: HobbyType,
      args: {
        // id: {type:GraphQLID},
        userId: { type: GraphQLID },
        title: { type: new GraphQLNonNull(GraphQLString) },
        description: { type: new GraphQLNonNull(GraphQLString) },
      },
      resolve(parent, args) {
        let hobby = {
          title: args.title,
          description: args.description,
          userId: args.userId,
        }
        return hobby;
      },
    },

    // TO DO: ADD MUTUTATIONS ONCE DATA MOVED INTO DB
    // DELETE
    // UPDATE
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation,
});