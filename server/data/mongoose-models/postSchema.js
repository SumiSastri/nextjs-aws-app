const { model, Schema } = require('mongoose');

const postSchema = new Schema({
  posts: String,
  comments: String,
  description: String,
  // createdAt: String,
});

module.exports = model('Post', postSchema);
