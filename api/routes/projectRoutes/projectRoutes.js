const express = require('express');
const router = express.Router();
const projectCtrl = require('../../controller/projectctrl/projectCtrl');
const upload = require("../../middleware/uploadMiddleware");


router.post('/',upload.single("imgUrl"), projectCtrl.createProject);
router.get('/', projectCtrl.getAllProjects);
router.get('/:id', projectCtrl.getProjectById);
router.put('/:id', projectCtrl.updateProject);
router.delete('/:id', projectCtrl.deleteProject);

module.exports = router;
