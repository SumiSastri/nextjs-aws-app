const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const hobbySchema = new Schema({
    title: String,
    description: String,
    userId: String,
    // createdAt: String
});

module.exports = mongoose.model('Hobby', hobbySchema);