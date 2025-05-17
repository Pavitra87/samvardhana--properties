const express = require('express');
const router = express.Router();
const locationHighCtrl = require('../../controller/projectctrl/locationHighCtrl');
const upload = require("../../middleware/uploadMiddleware");


router.post('/',upload.single("imgUrl"), locationHighCtrl.create);
router.get('/', locationHighCtrl.getAll);
router.get('/:id', locationHighCtrl.getById);
router.put('/:id', locationHighCtrl.update);
router.delete('/:id', locationHighCtrl.delete);

module.exports = router;
