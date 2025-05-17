const express = require('express');
const router = express.Router();
const projectBannerCtrl = require('../../controller/bannerctrl/projectBannerCtrl');
const upload = require("../../middleware/uploadMiddleware");


router.post('/',upload.single("imgUrl"),projectBannerCtrl.create);
router.get('/', projectBannerCtrl.getAll);
router.get('/:id', projectBannerCtrl.getById);
router.put('/:id', projectBannerCtrl.update);
router.delete('/:id', projectBannerCtrl.delete);

module.exports = router;
