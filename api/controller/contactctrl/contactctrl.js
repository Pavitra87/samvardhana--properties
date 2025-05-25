const Contact = require("../../models/contact/contactModal");

exports.create = async (req, res) => {
  try {
    const { name,email,phone,city,message } = req.body;

    const contact = new Contact({
      name,email,phone,city,message
    });

    const savedContact = await contact.save();

    res.status(201).json({
      success: true,
      message: "contact section created successfully.",
      data: savedContact,
    });

  } catch (error) {
    console.error("Error creating:", error);
    res.status(500).json({
      success: false,
      message: "Server error while creating contact section",
      error: error.message,
    });
  }
};


// Get all 
exports.getAll = async (req, res) => {
  try {
    const contact = await Contact.find();
    res.status(200).json(contact);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


// Delete 
exports.delete = async (req, res) => {
  try {
    const deletedcontact = await Contact.findByIdAndDelete(req.params.id);
    if (!deletedcontact)
      return res.status(404).json({ message: "not found" });
    res.status(200).json({ message: " deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
