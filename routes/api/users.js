const express = require("express");
const router = express.Router();

//@desc tests users route
//@access Public
router.get("/test", (req, res) => res.json({ msg: "users works" }));

module.exports = router;