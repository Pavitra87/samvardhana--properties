const mongoose = require("mongoose");

const blogBannerSchema = new mongoose.Schema({
    heading: String,
 imgUrl: String,
  
  
});

module.exports = mongoose.model("BlogBAnner", blogBannerSchema);
