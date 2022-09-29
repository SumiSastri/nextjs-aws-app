const { model, Schema } = require('mongoose');

// naming convention must match the graphql naming convention
const postSchema = new Schema({
  post: String,
  comment: String,
  description: String,
  userId:String,
});

module.exports = model('Post', postSchema);
