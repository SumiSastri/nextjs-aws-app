const { model, Schema } = require('mongoose');

const userSchema = new Schema({
  name: String,
  age: Number,
  profession: String,
  phone: Number,
  email: String,
});

module.exports = model('User', userSchema);
