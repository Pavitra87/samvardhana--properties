const Home = require("../models/homeModel");
const fs = require("fs");
const path = require("path");


  // Create new Home entry
 const createHome= async (req, res) => {
    try {
      const { title, heading, description, buttons } = req.body;
      const imagePath = req.file ? req.file.path : "";

      const home = new Home({
        image: imagePath,
        title,
        heading,
        description,
        buttons: JSON.parse(buttons) || [],
      });

      await home.save();
      res.status(201).json({
        success: true,
        message: " create Successfully",
        data: home,
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({
        success: false,
        message: "Something went to wrong",
      });
    }
  }

  // Get all Home entries
  const getAllHomes= async (req, res) => {
    try {
      const homes = await Home.find();
      res.status(200).json({
        success:true,
        message:"successfully",
        data:homes
      });
    } catch (error) {
     console.log(error);
    res.status(500).json({
      success: false,
      message: "Something went to wrong",
    });
    }
  }

  // Get single Home entry by ID
  const getHomeById= async (req, res) => {
    try {
      const home = await Home.findById(req.params.id);
      if (!home)
        return res.status(404).json({ message: "Home entry not found" });
      res.json(home);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

  // Update Home entry
 const updateHome= async (req, res) => {
    try {
      const { title, heading, description, buttons } = req.body;
      const home = await Home.findById(req.params.id);
      if (!home)
        return res.status(404).json({ message: "Home entry not found" });

      // Delete old image if new one uploaded
      if (req.file && home.image) {
        fs.unlinkSync(path.resolve(home.image));
        home.image = req.file.path;
      }

      home.title = title || home.title;
      home.heading = heading || home.heading;
      home.description = description || home.description;
      home.buttons = buttons ? JSON.parse(buttons) : home.buttons;

      await home.save();
      res.json(home);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  }

  // Delete Home entry
 const deleteHome= async (req, res) => {
    try {
      const home = await Home.findByIdAndDelete(req.params.id);
      if (!home)
        return res.status(404).json({ message: "Home entry not found" });

      // Delete associated image file
      if (home.image) {
        fs.unlinkSync(path.resolve(home.image));
      }

      res.json({ message: "Home entry deleted successfully" });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

module.exports={createHome,getAllHomes,getHomeById,updateHome,deleteHome}