const express = require("express");
const User = require("../models/User");
const router = express.Router();

router.post("/goals", async (req, res) => {
  const { course } = req.body;

  console.log(course);
});

router.post("/", async (req, res) => {
  const { subject, level } = req.body;

  console.log(subject, level);
});

module.exports = router;
