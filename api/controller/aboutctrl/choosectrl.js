const Choice = require("../../models/about/chooseModel");

exports.create = async (req, res) => {
  try {
    const { title, headings } = req.body;

    // Parse headings if it's sent as a stringified JSON
    let parsedHeadings = [];
    if (typeof headings === "string") {
      parsedHeadings = JSON.parse(headings);
    } else {
      parsedHeadings = headings || [];
    }

    const imgUrl = req.file ? req.file.filename : null;

    const about = new Choice({
      title,
      headings: parsedHeadings,
      imgUrl,
    });

    const savedChoice = await about.save();

    res.status(201).json({
      success: true,
      message: "Choice section created successfully",
      data: savedChoice,
    });
  } catch (error) {
    console.error("Error creating choice:", error);
    res.status(500).json({
      success: false,
      message: "Server error while creating choice",
      error: error.message,
    });
  }
};


// Get all 
exports.getAll = async (req, res) => {
  try {
    const choice = await Choice.find();
    res.status(200).json(choice);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get a single by ID
exports.getById = async (req, res) => {
  try {
    const choice = await Choice.findById(req.params.id);
    if (!choice) return res.status(404).json({ message: " not found" });
    res.status(200).json(about);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update 
exports.update = async (req, res) => {
  try {
    const updatedchoice = await Choice.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedchoice)
      return res.status(404).json({ message: "not found" });
    res.status(200).json(updatedchoice);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Delete 
exports.delete = async (req, res) => {
  try {
    const deletedchoice = await Choice.findByIdAndDelete(req.params.id);
    if (!deletedchoice)
      return res.status(404).json({ message: "not found" });
    res.status(200).json({ message: " deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
