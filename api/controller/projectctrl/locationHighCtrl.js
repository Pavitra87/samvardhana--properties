const Locationhigh = require("../../models/project/locationHighlightsModel");

exports.create = async (req, res) => {
  try {
    const { heading, title, points } = req.body;

    const imgUrl = req.file ? req.file.filename : null;

    const locationhigh = new Locationhigh({
      title,
      description,
      imgUrl,
      details,
    });

    const savedlocationhighlights = await Locationhigh.save();

    res.status(201).json({
      success: true,
      message: "created successfully",
      data: savedlocationhighlights ,
    });
  } catch (error) {
    console.error("Error creating :", error);
    res.status(500).json({
      success: false,
      message: "Server error while creating project",
      error: error.message,
    });
  }
};

// Get all projects
exports.getAll = async (req, res) => {
  try {
    const locationhigh = await Locationhigh.find();
    res.status(200).json(locationhigh);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get a single project by ID
exports.getById = async (req, res) => {
  try {
    const locationhigh = await Locationhigh.findById(req.params.id);
    if (!locationhigh) return res.status(404).json({ message: "Project not found" });
    res.status(200).json(locationhigh);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update a project
exports.update = async (req, res) => {
  try {
    const updatedlocationhigh = await Locationhigh.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedlocationhigh)
      return res.status(404).json({ message: "Project not found" });
    res.status(200).json(updatedlocationhigh);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Delete a project
exports.delete = async (req, res) => {
  try {
    const deletedlocationhigh = await Locationhigh.findByIdAndDelete(req.params.id);
    if (!deletedlocationhigh)
      return res.status(404).json({ message: "not found" });
    res.status(200).json({ message: " deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
