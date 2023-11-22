const User = require("../models/User");
const router = require("express").Router();

router.get("/", async (req, res) => {
  try {
    const { user } = req;
    console.log(req.body);
    const userEmail = await User.findOne({ email: user });
    console.log(userEmail);
  } catch (error) {
    console.log(error);
    res.status(500).json("error occupation");
  }
});

module.exports = router;
