const mongoose = require("mongoose");

const SubSectionSchema = new mongoose.Schema({
  subheading: { type: String, required: true },
  subDescription: { type: String, required: true },
  imgUrl: [{ type: String, required: true }], // array of image filenames/URLs
}, { _id: false });

const OurJourneySchema = new mongoose.Schema({
  heading: { type: String, required: true },
  description: { type: String, required: true },
  subSections: [SubSectionSchema], // array of subsections with multiple images
  backgroundImg: { type: String, required: true }, // single background image filename/URL
}, { timestamps: true });

module.exports = mongoose.model("OurJourney", OurJourneySchema);
