const express = require("express");
const User = require("../models/User");
const router = express.Router();

router.post("/ppttc", async (req, res) => {
  try {
    const { user, sessionType, name, email, mobileNumber, district } = req.body;
    const userMail = await User.findOne({ email: user });
    const userId = userMail._id.valueOf();
    const formData = {
      name,
      mobileNumber,
      email,
      district,
      sessionType,
      course: "PPTTC",
    };
    await User.findByIdAndUpdate(
      userId,
      { $push: { formSubmitted: formData } },
      { new: true }
    );
    return res.status(200).json("Form Submitted");
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .send("An error occurred while submitting form");
  }
});

router.post("/mttc", async (req, res) => {
  try {
    const { user, sessionType, name, email, mobileNumber, district } = req.body;


    const userMail = await User.findOne({ email: user });
    const userId = userMail._id.valueOf();
    const formData = {
      name,
      mobileNumber,
      email,
      district,
      sessionType,
      course: "MTTC",
    };
    await User.findByIdAndUpdate(
      userId,
      { $push: { formSubmitted: formData } },
      { new: true }
    );
    return res.status(200).json("Form Submitted");
  } catch (error) {
    return res
      .status(500)
      .send("An error occurred while submitting form", error);
  }
});

router.post("/httc", async (req, res) => {
  try {
    const { user, sessionType, name, email, mobileNumber, district } = req.body;
    const userMail = await User.findOne({ email: user });
    const userId = userMail._id.valueOf();
    const formData = {
      name,
      mobileNumber,
      email,
      district,
      sessionType,
      course: "Hindi Teachers Course",
    };
    await User.findByIdAndUpdate(
      userId,
      { $push: { formSubmitted: formData } },
      { new: true }
    );
    return res.status(200).json("Form Submitted");
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .send("An error occurred while submitting form", error);
  }
});

module.exports = router;