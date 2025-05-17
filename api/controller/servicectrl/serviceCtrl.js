const Services = require("../../models/service/serviceModel");

exports.create = async (req, res) => {
  try {
    const { title,heading ,description,subtitle,subdesc} = req.body;

    const img = req.file ? req.file.filename : null;

    const service = new Services({
      title,heading ,description,img,subtitle,subdesc
    });

    const savedservice = await service.save();

    res.status(201).json({
      success: true,
      message: "created successfully",
      data: savedservice ,
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
    const service = await Services.find();
    res.status(200).json(service);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get a single by ID
exports.getById = async (req, res) => {
  try {
    const service = await Services.findById(req.params.id);
    if (!service) return res.status(404).json({ message: " not found" });
    res.status(200).json(service);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update 
exports.update = async (req, res) => {
  try {
    const updatedservice = await Services.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedservice)
      return res.status(404).json({ message: "not found" });
    res.status(200).json(updatedservice);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Delete 
exports.delete = async (req, res) => {
  try {
    const deletedservice = await Services.findByIdAndDelete(req.params.id);
    if (!deletedservice)
      return res.status(404).json({ message: "not found" });
    res.status(200).json({ message: " deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
