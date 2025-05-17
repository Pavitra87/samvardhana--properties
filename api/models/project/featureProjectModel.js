const mongoose = require("mongoose");

const FeatureProjectSchema = new mongoose.Schema({
  heading: String,
  description: String,
  imgUrl: String,
  subheading: String,
  subdescription: String,
});

module.exports = mongoose.model("FeatureProject", FeatureProjectSchema);
