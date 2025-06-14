const Project = require('../../models/project/projectModel'); 

exports.createProject = async (req, res) => {
 try {
    const {  heading, description} = req.body;

   const imgUrl = req.file?.filename || null;


    const project = new Project({
      imgUrl,
      
      heading,
      description,
      
    });

    const savedproject = await project.save();

    res.status(201).json({
      success: true,
      message: "created successfully",
      data: savedproject,
    });
  } catch (error) {
    console.error("Error creating :", error);
    res.status(500).json({
      success: false,
      message: "Server error while creating",
      error: error.message,
    });
  }
};


// Get all projects
exports.getAllProjects = async (req, res) => {
  try {
    const projects = await Project.find();
    res.status(200).json(projects);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get a single project by ID
exports.getProjectById = async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);
    if (!project) return res.status(404).json({ message: 'Project not found' });
    res.status(200).json(project);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update a project
exports.updateProject = async (req, res) => {
  const { id } = req.params;
  const { heading, description } = req.body;

  let imgUrl = req.body.imgUrl;
  if (req.file) {
    imgUrl = req.file.filename; // or path if you need full URL
  }

  try {
    const updateData = { heading, description };
    if (imgUrl) updateData.imgUrl = imgUrl;

    const updatedProject = await Project.findByIdAndUpdate(id, updateData, {
      new: true,
    });

    if (!updatedProject) {
      return res.status(404).json({ message: "Project not found" });
    }

    res.status(200).json({
      success: true,
      message: "Project updated successfully",
      data: updatedProject,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};



// Delete a project
exports.deleteProject = async (req, res) => {
  try {
    const deletedProject = await Project.findByIdAndDelete(req.params.id);
    if (!deletedProject) return res.status(404).json({ message: 'Project not found' });
    res.status(200).json({ message: 'Project deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
