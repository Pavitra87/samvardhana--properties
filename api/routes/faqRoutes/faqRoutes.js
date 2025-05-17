const express = require('express');
const router = express.Router();
const faqCtrl = require('../../controller/faqctrl/faqCtrl');
const upload = require("../../middleware/uploadMiddleware");


router.post('/',upload.single("imgUrl"), faqCtrl.create);
router.get('/', faqCtrl.getAll);
router.get('/:id', faqCtrl.getById);
router.put('/:id', faqCtrl.update);
router.delete('/:id', faqCtrl.delete);

module.exports = router;
