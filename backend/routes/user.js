const User = require("../models/User");
const router = require("express").Router();
const verifyAdmin = require("../middleware/verifyAdmin");

router.get("/", verifyAdmin, async (req, res) => {
  try {
    const users = await User.find();
    return res.status(200).json(users);
  } catch (error) {
    res.status(500).json("error while fetching users");
  }
});

module.exports = router;