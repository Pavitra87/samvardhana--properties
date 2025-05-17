const ContactBanner = require("../../models/banners/contactBanner");

exports.create = async (req, res) => {
  try {
    const { heading } = req.body;

    const imgUrl = req.file ? req.file.filename : null;

    const contactbanner = new ContactBanner({
      heading ,imgUrl
    });

    const savedcontactbanner = await contactbanner.save();

    res.status(201).json({
      success: true,
      message: "created successfully",
      data: savedcontactbanner ,
    });
  } catch (error) {
    console.error("Error creating :", error);
    res.status(500).json({
      success: false,
      message: "Server error while creating ",
      error: error.message,
    });
  }
};

// Get all 
exports.getAll = async (req, res) => {
  try {
    const banner = await ContactBanner.find();
    res.status(200).json(banner);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get a single by ID
exports.getById = async (req, res) => {
  try {
    const banner = await ContactBanner.findById(req.params.id);
    if (!banner) return res.status(404).json({ message: " not found" });
    res.status(200).json(banner);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update 
exports.update = async (req, res) => {
  try {
    const updatedbanner = await ContactBanner.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedbanner)
      return res.status(404).json({ message: "not found" });
    res.status(200).json(updatedbanner);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Delete 
exports.delete = async (req, res) => {
  try {
    const deletedbanner = await ContactBanner.findByIdAndDelete(req.params.id);
    if (!deletedbanner)
      return res.status(404).json({ message: "not found" });
    res.status(200).json({ message: " deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
