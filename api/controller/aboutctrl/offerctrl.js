const Offer = require("../../models/about/offerModel");


exports.create = async (req, res) => {
  try {
    const { title, items } = req.body;

    // Parse JSON string to array
    let parsedItems = [];
    if (typeof items === 'string') {
      parsedItems = JSON.parse(items);
    }

    // Handle background image
    const backgroundImg = req.files?.backgroundImg?.[0]?.filename || null;

    // Assign corresponding uploaded images to each item
    parsedItems = parsedItems.map((item, index) => {
      const imgFile = req.files?.[`itemImgs_${index}`]?.[0];
      return {
        ...item,
        imgUrl: imgFile?.filename || ""
      };
    });

    const newOffer = new Offer({
      title,
      backgroundImg,
      items: parsedItems,
    });

    const savedOffer = await newOffer.save();
    res.status(201).json({ message: 'Offer created', data: savedOffer });
  } catch (err) {
    console.error('Error creating offer:', err);
    res.status(500).json({ message: 'Internal Server Error', error: err.message });
  }
};


// Get all
exports.getAll = async (req, res) => {
  try {
    const offer = await Offer.find();
    res.status(200).json(offer);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get a single by ID
exports.getById = async (req, res) => {
  try {
    const offer = await Offer.findById(req.params.id);
    if (!offer) return res.status(404).json({ message: " not found" });
    res.status(200).json(offer);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update
exports.update = async (req, res) => {
  try {
    const updatedoffer = await Offer.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedoffer) return res.status(404).json({ message: "not found" });
    res.status(200).json(updatedoffer);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Delete
exports.delete = async (req, res) => {
  try {
    const deletedoffer = await Offer.findByIdAndDelete(req.params.id);
    if (!deletedoffer) return res.status(404).json({ message: "not found" });
    res.status(200).json({ message: " deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
