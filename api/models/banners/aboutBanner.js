const mongoose = require("mongoose");

const aboutBannerSchema = new mongoose.Schema({
    heading: String,
 imgUrl: String,
  
  
});

module.exports = mongoose.model("AboutBanner", aboutBannerSchema);
