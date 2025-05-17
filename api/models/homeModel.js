// models/Home.js

const mongoose = require("mongoose");

const HomeSchema = new mongoose.Schema({
  image: String, // Will store image file path
  title: String,
  heading: String,
  description: String,

  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Home", HomeSchema);
