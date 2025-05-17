const express = require('express');
const router = express.Router();
const choosectrl = require('../../controller/aboutctrl/choosectrl');
const upload = require("../../middleware/uploadMiddleware");


router.post('/',upload.single("imgUrl"), choosectrl.create);
router.get('/', choosectrl.getAll);
router.get('/:id', choosectrl.getById);
router.put('/:id', choosectrl.update);
router.delete('/:id', choosectrl.delete);

module.exports = router;
