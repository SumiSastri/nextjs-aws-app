const graphql = require("graphql");

const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLSchema,
  GraphQLID,
  GraphQLList,
  GraphQLNonNull,
} = graphql


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
    posts: {
      type: new GraphQLList(PostType),
      resolve(parent, args) {
        return _.filter(postsData, {
          userId: parent.id
        })
      }
    },
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

const HobbyType = new GraphQLObjectType({
  name: "Hobby",
  description: "Hobbies and interests ...",
  fields: () => ({
    id: { type: GraphQLID },
    title: { type: GraphQLString },
    description: { type: GraphQLString },
    user: {
      type: UserType,
      resolve(parent, args) {
        return _.find(usersData, { id: parent.userId })
      }
    },
  })
})

const PostType = new GraphQLObjectType({
  name: "Post",
  description: "Interesting information and posts ...",
  fields: () => ({
    id: { type: GraphQLID },
    post: { type: GraphQLString },
    comment: { type: GraphQLString },
    description: { type: GraphQLString },
    user: {
      type: UserType,
      resolve(parent, args) {
        return _.find(usersData, { id: parent.userId })
      }
    },
  })
})

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

    hobby: {
      type: HobbyType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return _.find(hobbiesData,
          { id: args.id }
        )
      },
    },

    post: {
      type: PostType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return _.find(postsData,
          { id: args.id }
        )
      },
    },

    users: {
      type: new GraphQLList(UserType),
      resolve(parent, args) {
        return usersData
      }
    },

    hobbies: {
      type: new GraphQLList(HobbyType),
      resolve(parent, args) {
        return hobbiesData
      }
    },

    posts: {
      type: new GraphQLList(PostType),
    resolve(parent, args) {
        return postsData
      }
    },


  },
});

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

    // TO DO: ADD MUTATIONS ONCE DATA MOVED INTO DB
    // DELETE
    // UPDATE
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation,
});