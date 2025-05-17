const mongoose = require("mongoose");

const homeBannerSchema = new mongoose.Schema({
    heading: String,
 imgUrl: String,
  
  
});

module.exports = mongoose.model("HomeBanner", homeBannerSchema);
