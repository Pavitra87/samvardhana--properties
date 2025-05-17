const express = require('express');
const router = express.Router();
const offerctrl = require('../../controller/aboutctrl/offerctrl');
const upload = require("../../middleware/uploadMiddleware");


router.post(
  '/',
  upload.fields([
  { name: 'imgUrl', maxCount: 5 },         // Multiple images
  { name: 'backgroundImg', maxCount: 1 }   // Single background image
]),
  offerctrl.create
);
router.get('/', offerctrl.getAll);
router.get('/:id', offerctrl.getById);
router.put('/:id', offerctrl.update);
router.delete('/:id', offerctrl.delete);

module.exports = router;
