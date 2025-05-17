const express = require('express');
const router = express.Router();
const keyAnimatesCtrl = require('../../controller/projectctrl/keyAminatesCtrl');
const upload = require("../../middleware/uploadMiddleware");


router.post('/',upload.single("imgUrl"), keyAnimatesCtrl.create);
router.get('/', keyAnimatesCtrl.getAll);
router.get('/:id', keyAnimatesCtrl.getById);
router.put('/:id', keyAnimatesCtrl.update);
router.delete('/:id', keyAnimatesCtrl.delete);

module.exports = router;
