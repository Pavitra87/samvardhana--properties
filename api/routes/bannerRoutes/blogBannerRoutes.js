const express = require('express');
const router = express.Router();
const blogBannerCtrl = require('../../controller/bannerctrl/blogBannerCtrl');
const upload = require("../../middleware/uploadMiddleware");


router.post('/',upload.single("imgUrl"),blogBannerCtrl.create);
router.get('/', blogBannerCtrl.getAll);
router.get('/:id', blogBannerCtrl.getById);
router.put('/:id', blogBannerCtrl.update);
router.delete('/:id', blogBannerCtrl.delete);

module.exports = router;
