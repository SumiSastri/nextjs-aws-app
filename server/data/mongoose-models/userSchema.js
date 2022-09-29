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

// mongoose model/collection called User based on the new Userschema it references 
module.exports = model('User', userSchema);
// module.exports = mongoose.model('User', userSchema);