const FeatureProject = require("../../models/project/featureProjectModel");

exports.create = async (req, res) => {
  try {
    const { heading, description, subheading,subdescription} = req.body;

    const imgUrl = req.file ? req.file.filename : null;

    const project = new FeatureProject({
     heading, description, subheading,subdescription,imgUrl
    });

    const savedProject = await project.save();

    res.status(201).json({
      success: true,
      message: "Project created successfully",
      data: savedProject,
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
    const projects = await FeatureProject.find();
    res.status(200).json(projects);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get a single project by ID
exports.getById = async (req, res) => {
  try {
    const project = await FeatureProject.findById(req.params.id);
    if (!project) return res.status(404).json({ message: "Project not found" });
    res.status(200).json(project);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update a project
exports.update = async (req, res) => {
  try {
    const updatedProject = await FeatureProject.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedProject)
      return res.status(404).json({ message: "Project not found" });
    res.status(200).json(updatedProject);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Delete a project
exports.delete = async (req, res) => {
  try {
    const deletedProject = await FeatureProject.findByIdAndDelete(req.params.id);
    if (!deletedProject)
      return res.status(404).json({ message: "Project not found" });
    res.status(200).json({ message: "Project deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
