const express = require('express');
const router = express.Router();
const serviceCtrl = require('../../controller/servicectrl/serviceCtrl');
const upload = require("../../middleware/uploadMiddleware");


router.post('/',upload.single("imgUrl"), serviceCtrl.create);
router.get('/', serviceCtrl.getAll);
router.get('/:id', serviceCtrl.getById);
router.put('/:id', serviceCtrl.update);
router.delete('/:id', serviceCtrl.delete);

module.exports = router;
