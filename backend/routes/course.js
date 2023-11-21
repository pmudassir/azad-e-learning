const express = require("express");
const User = require("../models/User");
const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const {user, course } = req.body;
    
    
    const userEmail = await User.findOne({email:user})
    const userId = userEmail._id.valueOf()
    
    await User.findByIdAndUpdate(
      userId,{$push:{courses:course}},{new:true}
      )

      return res.status(200).json("Form Submitted");
    } catch (error) {
      res.status(500).json("An error occurred")
    }

});

module.exports = router;
