const About = require("../../models/about/aboutModel");

exports.create = async (req, res) => {
  try {
    const { title, heading, description } = req.body;

    const imgUrls = req.files && req.files['imgUrl']
      ? req.files['imgUrl'].map(file => file.filename)
      : [];

    const about = new About({
      title,
      heading,
      description,
      imgUrl: imgUrls
    });

    const savedAbout = await about.save();

    res.status(201).json({
      success: true,
      message: "About section created successfully.",
      data: savedAbout,
    });

  } catch (error) {
    console.error("Error creating:", error);
    res.status(500).json({
      success: false,
      message: "Server error while creating About section",
      error: error.message,
    });
  }
};


// Get all 
exports.getAll = async (req, res) => {
  try {
    const about = await About.find();
    res.status(200).json(about);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get a single by ID
exports.getById = async (req, res) => {
  try {
    const about = await About.findById(req.params.id);
    if (!about) return res.status(404).json({ message: " not found" });
    res.status(200).json(about);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update 
exports.update = async (req, res) => {
  try {
    const updatedabout = await About.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedabout)
      return res.status(404).json({ message: "not found" });
    res.status(200).json(updatedabout);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Delete 
exports.delete = async (req, res) => {
  try {
    const deletedabout = await About.findByIdAndDelete(req.params.id);
    if (!deletedabout)
      return res.status(404).json({ message: "not found" });
    res.status(200).json({ message: " deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
