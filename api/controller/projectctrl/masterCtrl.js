const Masterplan = require('../../models/project/masterPlanModel'); 

exports.create = async (req, res) => {
  try {
    const {
        heading
    } = req.body;

  const imgUrl = req.file ? req.file.filename : null;

    const masterplan = new Masterplan({
     heading,
      imgUrl
       
    });

    const savedmasterplan = await masterplan.save();

    res.status(201).json({
      success: true,
      message: "Project created successfully",
      data: savedmasterplan,
    });

  } catch (error) {
    console.error("Error creating project:", error);
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
    const masterplan = await Masterplan.find();
    res.status(200).json(masterplan);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get a single project by ID
exports.getById = async (req, res) => {
  try {
    const masterplan = await Masterplan.findById(req.params.id);
    if (!masterplan) return res.status(404).json({ message: 'not found' });
    res.status(200).json(masterplan);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update a project
exports.update = async (req, res) => {
  try {
    const updatedmaster = await Masterplan.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedmaster) return res.status(404).json({ message: ' not found' });
    res.status(200).json(updatedmaster);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Delete a project
exports.delete = async (req, res) => {
  try {
    const deleted = await Masterplan.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ message: ' not found' });
    res.status(200).json({ message: ' deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
