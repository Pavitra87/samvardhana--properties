const mongoose = require('mongoose');

const AboutSchema = new mongoose.Schema({
  title: String,
  heading:String,
  description: String,
  imgUrl:[String]
  
 
 
});

module.exports = mongoose.model('About', AboutSchema);
