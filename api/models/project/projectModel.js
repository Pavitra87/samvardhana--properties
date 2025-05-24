const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema({

  heading:String,
  description: String,
  imgUrl: String,
 
 
});

module.exports = mongoose.model('Project', ProjectSchema);
