const About = require("../../models/about/aboutModel");

exports.create = async (req, res) => {
  try {
    const { title, heading, description } = req.body;
const imgUrl = req.file?.filename || null;
    const about = new About({
      title,
      heading,
      description,
      imgUrl
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
 const { id } = req.params;
  const { heading, description,title } = req.body;

  let imgUrl = req.body.imgUrl;
  if (req.file) {
    imgUrl = req.file.filename; // or path if you need full URL
  }

  try {
    const updateData = { heading, description,title };
    if (imgUrl) updateData.imgUrl = imgUrl;

    const updatedAbout = await About.findByIdAndUpdate(id, updateData, {
      new: true,
    });

    if (!updatedAbout) {
      return res.status(404).json({ message: " not found" });
    }

    res.status(200).json({
      success: true,
      message: " updated successfully",
      data: updatedAbout,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
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
