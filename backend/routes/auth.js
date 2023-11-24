const router = require("express").Router();
const User = require("../models/User");
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");
const emailVerification = require("../utils/mailer/emailVerification");

// REGISTER
router.post("/register", async (req, res) => {
  try {
    const { email, username, password } = req.body;

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res
        .status(400)
        .json({ message: "User already exists, try Sign In." });
    }

    const verificationToken = jwt.sign({ email }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });

    const newUser = new User({
      email,
      username,
      password: CryptoJS.AES.encrypt(password, process.env.PASS_SEC).toString(),
    });

    const savedUser = await newUser.save();
    const accessToken = jwt.sign(
      { userId: savedUser._id },
      process.env.JWT_SECRET
    );

    await emailVerification({ email, username, verificationToken });

    return res.status(200).json({ savedUser, accessToken });
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
});

router.get("/verify/:token", async (req, res) => {
  const token = req.params.token;

  try {
    const { email } = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findOne({ email});
    console.log(user);

    if (!user) {
      return res.status(404).json({ message: 'Invalid token' });
    }

    user.isVerified = true;
    user.verificationToken = undefined;
    await user.save();

    return res.status(200).json({ message: 'Email verified successfully. You can now log in.' });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: 'Error verifying email' });
  }
});

//LOGIN
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      res
        .status(401)
        .json({ message: "No user with this email! Try signing up." });
      return;
    }

    const hashedPassword = CryptoJS.AES.decrypt(
      user.password,
      process.env.PASS_SEC
    );

    const originalPassword = hashedPassword.toString(CryptoJS.enc.Utf8);

    if (originalPassword !== password) {
      res.status(401).json({ message: "Email or Password doesn't match!" });
      return;
    }

    const accessToken = jwt.sign(
      {
        id: user._id,
        isAdmin: user.isAdmin,
      },
      process.env.JWT_SECRET,
      { expiresIn: "3d" }
    );

    return res.status(200).json({ user, accessToken });
  } catch (err) {
    return res.status(500).json(err);
  }
});

module.exports = router;
