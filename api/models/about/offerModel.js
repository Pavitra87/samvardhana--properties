const mongoose = require('mongoose');

// Schema for each offer item (image + heading + description)
const OfferItemSchema = new mongoose.Schema({
  imgUrl: { type: String, required: true },
  heading: { type: String, required: true },
  description: { type: String, required: true },
}, { _id: false });

const OfferSchema = new mongoose.Schema({
  backgroundImg: { type: String, required: true },
  title: { type: String, required: true },
  items: [OfferItemSchema]  // array of items
});

module.exports = mongoose.model('Offer', OfferSchema);
