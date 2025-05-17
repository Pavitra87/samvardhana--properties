const express = require('express');
const router = express.Router();
const masterCtrl = require('../../controller/projectctrl/masterCtrl');
const upload = require("../../middleware/uploadMiddleware");


router.post('/',upload.single("imgUrl"), masterCtrl.create);
router.get('/', masterCtrl.getAll);
router.get('/:id', masterCtrl.getById);
router.put('/:id', masterCtrl.update);
router.delete('/:id', masterCtrl.delete);

module.exports = router;
