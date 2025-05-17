const express = require("express");
const {
  createHome,
  getAllHomes,
  getHomeById,
  updateHome,
  deleteHome,
} = require("../controller/homeCtrl");
const upload = require("../middleware/uploadMiddleware");

const router = express.Router();

router.post("/create", upload.single("image"), createHome);
router.get("/", getAllHomes);
router.get("/:id", getHomeById);
router.put("/:id", updateHome);
router.delete("/:id", deleteHome);

module.exports = router;
