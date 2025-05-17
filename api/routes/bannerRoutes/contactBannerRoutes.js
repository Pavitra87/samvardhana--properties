const express = require('express');
const router = express.Router();
const contactBannerCtrl = require('../../controller/bannerctrl/contactBannerCtrl');
const upload = require("../../middleware/uploadMiddleware");


router.post('/',upload.single("imgUrl"),contactBannerCtrl.create);
router.get('/', contactBannerCtrl.getAll);
router.get('/:id', contactBannerCtrl.getById);
router.put('/:id', contactBannerCtrl.update);
router.delete('/:id', contactBannerCtrl.delete);

module.exports = router;
