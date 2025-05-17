const express = require('express');
const router = express.Router();
const aboutBannerCtrl = require('../../controller/bannerctrl/aboutBannerCtrl');
const upload = require("../../middleware/uploadMiddleware");


router.post('/',upload.single("imgUrl"), aboutBannerCtrl.create);
router.get('/', aboutBannerCtrl.getAll);
router.get('/:id', aboutBannerCtrl.getById);
router.put('/:id', aboutBannerCtrl.update);
router.delete('/:id', aboutBannerCtrl.delete);

module.exports = router;
