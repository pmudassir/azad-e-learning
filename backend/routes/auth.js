const router = require("express").Router();
const User = require("../models/User");
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");

// REGISTER
router.post("/register", async (req, res) => {
  const { email, username, password } = req.body;

  const newUser = new User({
    email,
    username,
    password: CryptoJS.AES.encrypt(password, process.env.PASS_SEC).toString(),
  });
  try {
    const savedUser = await newUser.save();
    const token = jwt.sign({ userId: savedUser._id }, process.env.JWT_SECRET);
    console.log(token);
    return res.status(201).json({ token, savedUser });
  } catch (err) {
    console.log(err);
    return res.status(500).json(err); 
  }
});

//LOGIN
router.use("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user) {
      res.status(401).json(`No user with ${user} this name, Wrong Credentials!`);
      return;
    }

    const hashedPassword = CryptoJS.AES.decrypt(
      user.password,
      process.env.PASS_SEC
    );
    const Originalpassword = hashedPassword.toString(CryptoJS.enc.Utf8);

    if (Originalpassword !== password) {
      res.status(401).json("not matching Password,Wrong Credentials!");
      return;
    }
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET);
    console.log(token);
    res.status(200).json({user, token});
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;