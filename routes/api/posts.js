const express = require("express");
const router = express.Router();

//@desc tests posts route
//@access Public
router.get("/test", (req, res) => res.json({ msg: "post works" }));

module.exports = router;
