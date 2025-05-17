const mongoose = require('mongoose');

const HeadingDescriptionSchema = new mongoose.Schema({
  heading: { type: String, required: true },
  description: { type: String, required: true }
}, { _id: false });

const ChooseSchema = new mongoose.Schema({
  title: { type: String, required: true },
  headings: [HeadingDescriptionSchema], // array of heading-description pairs
  imgUrl: { type: String, required: true }
}, { timestamps: true });

module.exports = mongoose.model('Choice', ChooseSchema);
