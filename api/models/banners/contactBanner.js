const mongoose = require("mongoose");

const contactBannerSchema = new mongoose.Schema({
  heading: String,
  imgUrl: String,
});

module.exports = mongoose.model("ContactBanner", contactBannerSchema);
