const Faqs = require("../../models/faq/faq");

exports.create = async (req, res) => {
  try {
    console.log("REQ.BODY:", req.body); // 🔍 Check this

    const { question, answer } = req.body;

    const faqs = new Faqs({ question, answer });
    const savedfaqs = await faqs.save();

    res.status(201).json({
      success: true,
      message: "created successfully",
      data: savedfaqs,
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
    const faqs = await Faqs.find();
    res.status(200).json(faqs);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get a single by ID
exports.getById = async (req, res) => {
  try {
    const faqs = await Faqs.findById(req.params.id);
    if (!faqs) return res.status(404).json({ message: " not found" });
    res.status(200).json(faqs);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update
exports.update= async (req, res) => {
  const { id } = req.params;
  const { question, answer } = req.body;

  try {
    const updatedFaq = await Faqs.findByIdAndUpdate(
      id,
      { question, answer },
      { new: true }
    );

    if (!updatedFaq) {
      return res.status(404).json({ message: "FAQ not found" });
    }

    res.json({
      success: true,
      data: updatedFaq,
      message: "FAQ updated successfully"
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}


// Delete
exports.delete = async (req, res) => {
  try {
    const deletedfaqs = await Faqs.findByIdAndDelete(req.params.id);
    if (!deletedfaqs) return res.status(404).json({ message: "not found" });
    res.status(200).json({ message: " deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
