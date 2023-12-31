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

router.get("/competitive", verifyAdmin, async (req, res) => {
  try {
    const students = await User.find({
      "courses.competitive": { $exists: true },
    });

    res.status(200).json(students);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

router.get("/math", verifyAdmin, async (req, res) => {
  try {
    const students = await User.find({ "courses.Math": { $exists: true } });

    res.status(200).json(students);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

router.get("/english", verifyAdmin, async (req, res) => {
  try {
    const students = await User.find({ "courses.English": { $exists: true } });

    res.status(200).json(students);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

router.get("/hindi", verifyAdmin, async (req, res) => {
  try {
    const students = await User.find({ "courses.Hindi": { $exists: true } });

    res.status(200).json(students);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

router.get("/ttc", verifyAdmin, async (req, res) => {
  try {
    const students = await User.find({
      "formSubmitted.course": { $exists: true },
    });

    res.status(200).json(students);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);

  }
});

module.exports = router;