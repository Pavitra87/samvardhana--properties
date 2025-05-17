const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema({
  title: String,
  heading:String,
  description: String,
  imgUrl: String,
 
 
});

module.exports = mongoose.model('Project', ProjectSchema);
