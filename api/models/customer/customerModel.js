const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema({
 
 cuatomername:String,
  description: String,
  imgUrl:String,

  
 
 
});

module.exports = mongoose.model('Customer', customerSchema);
