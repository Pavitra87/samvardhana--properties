const Customer = require("../../models/customer/customerModel");

exports.create = async (req, res) => {
  try {
    const { cuatomername,description} = req.body;

    const imgUrl = req.file ? req.file.filename : null;

    const customer = new Customer({
      cuatomername,description,imgUrl
    });

    const savedcustomer = await customer.save();

    res.status(201).json({
      success: true,
      message: "created successfully",
      data: savedcustomer ,
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
    const customers = await Customer.find();
    res.status(200).json(customers );
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get a single by ID
exports.getById = async (req, res) => {
  try {
    const customer = await Customer.findById(req.params.id);
    if (!customer) return res.status(404).json({ message: " not found" });
    res.status(200).json(customer);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update 
exports.update = async (req, res) => {
  try {
    const updated = await Customer.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updated)
      return res.status(404).json({ message: "not found" });
    res.status(200).json(updated);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Delete 
exports.delete = async (req, res) => {
  try {
    const deleted = await Customer.findByIdAndDelete(req.params.id);
    if (!deleted)
      return res.status(404).json({ message: "not found" });
    res.status(200).json({ message: " deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
