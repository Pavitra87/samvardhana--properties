const express = require('express');
const router = express.Router();
const featureProjectCtrl = require('../../controller/projectctrl/featureProjectCtrl');
const upload = require("../../middleware/uploadMiddleware");


router.post('/',upload.single("imgUrl"), featureProjectCtrl.create);
router.get('/', featureProjectCtrl.getAll);
router.get('/:id', featureProjectCtrl.getById);
router.put('/:id', featureProjectCtrl.update);
router.delete('/:id', featureProjectCtrl.delete);

module.exports = router;
