const mongoose = require("mongoose");

const KeyAnimatesModelSchema = new mongoose.Schema({
    heading: String,
  description: String,
  imgUrl: String,
  title:String

});

module.exports = mongoose.model("KeyAnimates", KeyAnimatesModelSchema);
