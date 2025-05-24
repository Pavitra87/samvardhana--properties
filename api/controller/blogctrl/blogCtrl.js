const Blog = require("../../models/blogModel/blogModel");

exports.create = async (req, res) => {
  try {
    const { name, heading, description, like, dislike, message } = req.body;

    const imgUrl = req.files?.imgUrl?.[0]?.filename || null;
    const profilepic = req.files?.profilepic?.[0]?.filename || null;

    const blog = new Blog({
      imgUrl,
      profilepic,
      name,
      heading,
      description,
      like,
      dislike,
      message,
      time: new Date().toISOString(), // add current time
    });

    const savedblog = await blog.save();

    res.status(201).json({
      success: true,
      message: "created successfully",
      data: savedblog,
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


// Get all
exports.getAll = async (req, res) => {
  try {
    const blog = await Blog.find();
    res.status(200).json(blog);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get a single by ID
exports.getById = async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    if (!blog) return res.status(404).json({ message: " not found" });
    res.status(200).json(blog);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update
exports.update = async (req, res) => {
   const { id } = req.params;
    const { heading, description,name } = req.body;
  
    let imgUrl = req.body.imgUrl;
    if (req.file) {
      imgUrl = req.file.filename; // or path if you need full URL
    }
  
    try {
      const updateData = { heading, description,name };
      if (imgUrl) updateData.imgUrl = imgUrl;
  
      const updatedBlog = await Blog.findByIdAndUpdate(id, updateData, {
        new: true,
      });
  
      if (!updatedBlog) {
        return res.status(404).json({ message: "not found" });
      }
  
      res.status(200).json({
        success: true,
        message: " updated successfully",
        data: updatedBlog,
      });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
};

// Delete
exports.delete = async (req, res) => {
  try {
    const deletedblog = await Blog.findByIdAndDelete(req.params.id);
    if (!deletedblog) return res.status(404).json({ message: "not found" });
    res.status(200).json({ message: " deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
