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
  if (!req.body) {
    return res.status(400).json({ error: "Missing request body" });
  }

  const { id } = req.params;
  const { name, heading, description, message, imgUrl, profilepic } = req.body;

  try {
    const updatedBlog = await Blog.findByIdAndUpdate(
      id,
      { name, heading, description, message, imgUrl, profilepic },
      { new: true }
    );

    if (!updatedBlog) {
      return res.status(404).json({ message: "Blog not found" });
    }

  res.status(200).json({
    success:true,
  message: "Blog updated successfully",
  data: updatedBlog,
});
  } catch (error) {
    res.status(400).json({ error: error.message });
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
