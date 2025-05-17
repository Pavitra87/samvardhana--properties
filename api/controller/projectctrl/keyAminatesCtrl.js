const KeyAnimates = require('../../models/project/keyAnimatesModel'); 

exports.create = async (req, res) => {
  try {
    const {
      heading,
      title,
      description,
   
    } = req.body;

  const imgUrl = req.file ? req.file.filename : null;

    const keyAnimates = new KeyAnimates({
      title,
      description,
      imgUrl,
       heading
    });

    const savedKeyAnimate = await keyAnimates.save();

    res.status(201).json({
      success: true,
      message: " created successfully",
      data: savedKeyAnimate,
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
    const keyAnimates = await KeyAnimates.find();
    res.status(200).json(keyAnimates);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get a single project by ID
exports.getById = async (req, res) => {
  try {
    const keyanimate = await KeyAnimates.findById(req.params.id);
    if (!keyanimate) return res.status(404).json({ message: ' not found' });
    res.status(200).json(keyanimate);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update a project
exports.update = async (req, res) => {
  try {
    const updatedKeyAnimate = await KeyAnimates.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedKeyAnimate) return res.status(404).json({ message: 'Project not found' });
    res.status(200).json(updatedKeyAnimate);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Delete a project
exports.delete = async (req, res) => {
  try {
    const deletedkeyanimate = await KeyAnimates.findByIdAndDelete(req.params.id);
    if (!deletedkeyanimate) return res.status(404).json({ message: 'Project not found' });
    res.status(200).json({ message: ' deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
