const express = require('express');
const router = express.Router();
const aboutctrl = require('../../controller/aboutctrl/aboutctrl');
const upload = require("../../middleware/uploadMiddleware");


router.post('/',upload.fields([{ name: "imgUrl", maxCount: 5 }]), aboutctrl.create);
router.get('/', aboutctrl.getAll);
router.get('/:id', aboutctrl.getById);
router.put('/:id', aboutctrl.update);
router.delete('/:id', aboutctrl.delete);

module.exports = router;
