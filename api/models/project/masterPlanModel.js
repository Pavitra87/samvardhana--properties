const mongoose = require("mongoose");

const MasterPlanModelSchema = new mongoose.Schema({
    heading: String,
 imgUrl: String,
  
  
});

module.exports = mongoose.model("Masterplan", MasterPlanModelSchema);
