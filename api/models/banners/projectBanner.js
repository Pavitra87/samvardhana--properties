const mongoose = require("mongoose");

const projectBannerSchema = new mongoose.Schema({
  heading: String,
  imgUrl: String,
});

module.exports = mongoose.model("ProjectBanner", projectBannerSchema);
