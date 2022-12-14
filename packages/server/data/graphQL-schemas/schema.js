const graphql = require("graphql");

const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLSchema,
  GraphQLID,
  GraphQLList,
  GraphQLNonNull,
} = graphql;

const User = require("../mongoose-models/userSchema");
const Post = require("../mongoose-models/postSchema");
const Hobby = require("../mongoose-models/hobbySchema");

// TYPES
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
    // user's hobbies
    hobbies: {
      type: new GraphQLList(HobbyType),
      resolve(parent, args) {
        return Hobby.find({ userId: parent.id });
      },
    },
    // user's posts
    posts: {
      type: new GraphQLList(PostType),
      resolve(parent, args) {
        return Post.find({ userId: parent.id });
      },
    },
  }),
});

// All hobbies
const HobbyType = new GraphQLObjectType({
  name: "Hobby",
  description: "Hobbies and interests ...",
  fields: () => ({
    id: { type: GraphQLID },
    title: { type: GraphQLString },
    description: { type: GraphQLString },
    user: {
      type: UserType,
      // resolve(parent, args) {
      //   return _.find(usersData, { id: parent.userId })
      resolve(parent, args) {
        return User.findById(parent.id);
      },
    },
  }),
});
// All posts
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
        return User.findById(parent.id);
      },
    },
  }),
});

// QUERIES
const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  description: "Description",
  fields: {
    // query by Id
    user: {
      type: UserType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return User.findById(args.id);
      },
    },

    hobby: {
      type: HobbyType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return Hobbby.findById(args.id);
      },
    },
    post: {
      type: PostType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return Post.findById(args.id);
      },
    },
    // query by Lists
    users: {
      type: new GraphQLList(UserType),
      resolve(parent, args) {
        return User.find({});
      },
    },
    hobbies: {
      type: new GraphQLList(HobbyType),
      resolve(parent, args) {
        return Hobby.find({});
      },
    },
    posts: {
      type: new GraphQLList(PostType),
      resolve(parent, args) {
        return Post.find({});
      },
    },
  },
});

// MUTATIONS
const Mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    // CREATE
    createUser: {
      type: UserType,
      args: {
        id: { type: GraphQLID },
        name: { type: new GraphQLNonNull(GraphQLString) },
        profession: { type: new GraphQLNonNull(GraphQLString) },
        phoneNumber: { type: new GraphQLNonNull(GraphQLInt) },
        email: { type: new GraphQLNonNull(GraphQLString) },
        age: { type: new GraphQLNonNull(GraphQLInt) },
      },

      resolve(parent, args) {
        let user = User({
          name: args.name,
          profession: args.profession,
          phoneNumber: args.phoneNumber,
          email: args.email,
          age: args.age,
        });
        return user.save();
      },
    },

    createHobby: {
      type: HobbyType,
      args: {
        id: { type: GraphQLID },
        userId: { type: GraphQLID },
        title: { type: new GraphQLNonNull(GraphQLString) },
        description: { type: new GraphQLNonNull(GraphQLString) },
      },
      resolve(parent, args) {
        let hobby = Hobby({
          title: args.title,
          description: args.description,
          userId: args.userId,
        });
        return hobby.save();
      },
    },

    createPost: {
      type: PostType,
      args: {
        id: { type: GraphQLID },
        userId: { type: GraphQLID },
        post: { type: new GraphQLNonNull(GraphQLString) },
        comment: { type: new GraphQLNonNull(GraphQLString) },
        description: { type: new GraphQLNonNull(GraphQLString) },
      },
      resolve(parent, args) {
        let post = Post({
          id: { type: GraphQLID },
          post: args.post,
          comment: args.comment,
          description: args.description,
          userId: args.userId,
        });
        return post.save();
      },
    },

    // UPDATE - get and set data
    updateUser: {
      type: UserType,
      // same as fields of the schema
      args: {
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        profession: { type: GraphQLString },
        phoneNumber: { type: GraphQLInt },
        email: { type: GraphQLString },
        age: { type: GraphQLInt },
      },
      resolve(parent, args) {
        return User.findByIdAndUpdate(
          args.id,
          {
            $set: {
              name: args.name,
              profession: args.genre,
              phoneNumber: args.phoneNumber,
              email: args.email,
              age: args.age,
            },
          },
          { new: true }
        );
      },
    },

    updateHobby: {
      type: HobbyType,
      args: {
        id: { type: GraphQLID },
        title: { type: GraphQLString },
        description: { type: GraphQLString },
      },
      resolve(parent, args) {
        return Hobby.findByIdAndUpdate(
          args.id,
          {
            $set: {
              title: args.title,
              description: args.description,
            },
          },
          { new: true }
        );
      },
    },

    updatePost: {
      type: PostType,
      args: {
        id: { type: GraphQLID },
        post: { type: GraphQLString },
        comment: { type: GraphQLString },
        description: { type: GraphQLString },
      },
      resolve(parent, args) {
        return Post.findByIdAndUpdate(
          args.id,
          {
            $set: {
              post: args.title,
              comment: args.comment,
              description: args.description,
            },
          },
          { new: true }
        );
      },
    },

    // DELETE
    deleteUser: {
      type: UserType,
      args: {
        id: { type: graphql.GraphQLID },
      },
      // Method 2:
      resolve(parent, args) {
        let removeUser = User.findByIdAndRemove(args.id).exec()
        if (!removeUser) {
          throw new "Error"()
        }
        return removeUser
      },
    },
    deleteHobby: {
      type: HobbyType,
      args: {
        id: { type: graphql.GraphQLID },
      },
      // Method 1:
      resolve(parent, args) {
        return Hobby.findByIdAndRemove(args.id);
      },
    },
    deletePost: {
      type: PostType,
      args: {
        id: { type: graphql.GraphQLID },
      },
      resolve(parent, args) {
        return Post.findByIdAndRemove(args.id);
      },
    },
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation,
});
