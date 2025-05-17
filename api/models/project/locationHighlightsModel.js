const mongoose = require("mongoose");

const LocationHighModelSchema = new mongoose.Schema({
  heading: String,
imgUrl: String,
  title: String,
  points: [String],
});

module.exports = mongoose.model("Locationhigh", LocationHighModelSchema);
