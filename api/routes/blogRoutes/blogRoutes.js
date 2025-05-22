const express = require('express');
const router = express.Router();
const blogctrl = require('../../controller/blogctrl/blogCtrl');
const upload = require("../../middleware/uploadMiddleware");


router.post('/', upload.fields([
    { name: "profilepic", maxCount: 1 },
    { name: "imgUrl", maxCount: 1 },
  ]), blogctrl.create);
router.get('/', blogctrl.getAll);
router.get('/:id', blogctrl.getById);
router.put('/:id', blogctrl.update);
router.delete('/:id', blogctrl.delete);

module.exports = router;
