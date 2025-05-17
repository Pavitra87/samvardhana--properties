const express = require('express');
const router = express.Router();
const homeBannerCtrl = require('../../controller/bannerctrl/homebannerCtrl');
const upload = require("../../middleware/uploadMiddleware");


router.post('/',upload.single("imgUrl"),homeBannerCtrl.create);
router.get('/', homeBannerCtrl.getAll);
router.get('/:id', homeBannerCtrl.getById);
router.put('/:id', homeBannerCtrl.update);
router.delete('/:id', homeBannerCtrl.delete);

module.exports = router;
