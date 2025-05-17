const express = require('express');
const router = express.Router();
const customerctrl = require('../../controller/cutomerctrl/customerCtrl');
const upload = require("../../middleware/uploadMiddleware");


router.post('/',upload.single("imgUrl"), customerctrl.create);
router.get('/', customerctrl.getAll);
router.get('/:id', customerctrl.getById);
router.put('/:id', customerctrl.update);
router.delete('/:id', customerctrl.delete);

module.exports = router;
