const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
  profilepic:String,
  name:String,
  heading:String,
  description: String,
  imgUrl:String,
  like:String,
  dislike:String,
  message:String,
  time:String
  
  
 
 
});

module.exports = mongoose.model('Blog', blogSchema);
