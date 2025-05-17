const express = require('express');
const router = express.Router();
const ourjourneyctrl = require('../../controller/aboutctrl/ourjourneyctrl');
const upload = require("../../middleware/uploadMiddleware");


router.post('/',upload.fields([
    { name: "backgroundImg", maxCount: 1 },
    { name: "imgUrl", maxCount: 10 }
  ]), ourjourneyctrl.create);
router.get('/', ourjourneyctrl.getAll);
router.get('/:id', ourjourneyctrl.getById);
router.put('/:id', ourjourneyctrl.update);
router.delete('/:id', ourjourneyctrl.delete);

module.exports = router;
