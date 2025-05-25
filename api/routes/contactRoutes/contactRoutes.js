const express = require("express");
const router = express.Router();
const contactCtrl = require("../../controller/contactctrl/contactctrl");


router.post("/", contactCtrl.create);
router.get("/", contactCtrl.getAll);

router.delete("/:id", contactCtrl.delete);

module.exports = router;
