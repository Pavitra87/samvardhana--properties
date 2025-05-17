const mongoose = require("mongoose");

const services = new mongoose.Schema({
  title: String,
  heading: String,
  description: String,
  subtitle: String,
  subdesc: String,
  imgUrl: String,
});

module.exports = mongoose.model("Services", services);
