// common js syntax
// const mongoose = require('mongoose');
// const Schema = mongoose.Schema;
const { model, Schema } = require('mongoose');

const userSchema = new Schema({
  name: String,
  age: Number,
  profession: String,
  phone: Number,
  email: String,
  // createdAt: String
});

// mongoose model/collection called User based on the new UserSchema it references
// this new UserSchema is imported as User in the graphQL schema to reference the model
module.exports = model('User', userSchema);
// module.exports = mongoose.model('User', userSchema);