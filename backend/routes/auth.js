const router = require("express").Router();
const User = require("../models/User");
const CryptoJS = require("crypto-js");

router.post("/register", async (req, res) => {
    const { email, username, password } = req.body

    const newUser = new User({
        email,
        username,
        password: CryptoJS.AES.encrypt(
            password,
            process.env.PASS_SEC
        ).toString(),
    });
    try {
        const savedUser = await newUser.save();
        res.status(201).json(savedUser);
    }
    catch (err) {
        res.status(500).json(err)
    }
});

//LOGIN
router.post("/login", async (req, res) => {
    try {
        const { username, password } = req.body

        const user = await User.findOne({ username })

        if (!user) {
            res.status(401).json("Wrong Credentials!")
            return;
        }

        const hashedPassword = CryptoJS.AES.decrypt(
            user.password,
            process.env.PASS_SEC
        );
        const Originalpassword = hashedPassword.toString(CryptoJS.enc.Utf8)

        if (Originalpassword !== password) {
            res.status(401).json("Wrong Credentials!");
            return
        }

        res.status(200).json("Successful");
    }
    catch (err) {
        res.status(500).json(err)
    }
});

module.exports = router;