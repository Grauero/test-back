const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
  userId: String,
  name: String,
  surname: String,
  comment: String,
});

module.exports = mongoose.model('Comment', commentSchema);
