const OurJourney = require("../../models/about/ourJourneyModel");

exports.create = async (req, res) => {
  try {
    const { heading, description, subSections } = req.body;

    // Parse subSections JSON string if necessary
    let parsedSubSections = [];
    if (typeof subSections === "string") {
      parsedSubSections = JSON.parse(subSections);
    } else {
      parsedSubSections = subSections || [];
    }

    // Get background image filename
    const backgroundImg = req.files?.backgroundImg?.[0]?.filename || null;

   
    parsedSubSections = parsedSubSections.map((subSection, index) => {
      const filesKey = `subSectionsImages_${index}`;
      const images = req.files?.[filesKey] || [];
      const imgUrls = images.map(file => file.filename);

      return {
        ...subSection,
        imgUrl: imgUrls,
      };
    });

    // Create new journey document
    const journey = new OurJourney({
      heading,
      description,
      subSections: parsedSubSections,
      backgroundImg,
    });

    const savedJourney = await journey.save();

    res.status(201).json({
      success: true,
      message: "Journey created successfully",
      data: savedJourney,
    });
  } catch (error) {
    console.error("Error creating journey:", error);
    res.status(500).json({
      success: false,
      message: "Server error while creating journey",
      error: error.message,
    });
  }
};



// Get all
exports.getAll = async (req, res) => {
  try {
    const journey = await OurJourney.find();
    res.status(200).json(journey);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get a single by ID
exports.getById = async (req, res) => {
  try {
    const journey = await OurJourney.findById(req.params.id);
    if (!offer) return res.status(404).json({ message: " not found" });
    res.status(200).json(journey);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update
exports.update = async (req, res) => {
  try {
    const updatedjourney = await OurJourney.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedoffer) return res.status(404).json({ message: "not found" });
    res.status(200).json(updatedjourney);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Delete
exports.delete = async (req, res) => {
  try {
    const deletedjourney = await OurJourney.findByIdAndDelete(req.params.id);
    if (!deletedjourney) return res.status(404).json({ message: "not found" });
    res.status(200).json({ message: " deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
