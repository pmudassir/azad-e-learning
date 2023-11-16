const express = require('express');
const router = express.Router();

router.post("/ppttc", async (req, res) => {
    try {
        const { sessionType, name, email, mobileNumber, district } = req.body;
        const userEmail = req.user.emails[0].value;
        const user = await User.findOne({ email: userEmail });
        const userId = user._id.valueOf();
        const formData = {
            name,
            mobileNumber,
            email,
            district,
            sessionType,
            course: "PPTTC",
        };
        await User.findByIdAndUpdate(userId, { $push: { formSubmitted: formData }, }, { new: true });
        res.status(200).json("Form Submitted");
    } catch (error) {
        console.log(error);
        res.status(500).send("An error occurred while submitting form", error);
    }
});

router.post("/mttc", async (req, res) => {
    try {
        const { sessionType, name, email, mobileNumber, district } = req.body;
        const userEmail = req.user.emails[0].value;
        const user = await User.findOne({ email: userEmail });
        const userId = user._id.valueOf();
        const formData = {
            name,
            mobileNumber,
            email,
            district,
            sessionType,
            course: "MTTC",
        };
        await User.findByIdAndUpdate(userId, { $push: { formSubmitted: formData }, }, { new: true });
        res.status(200).json("Form Submitted");
    } catch (error) {
        console.log(error);
        res.status(500).send("An error occurred while submitting form", error);
    }
});

router.post("/hindi", async (req, res) => {
    try {
        const { sessionType, name, email, mobileNumber, district } = req.body;
        const userEmail = req.user.emails[0].value;
        const user = await User.findOne({ email: userEmail });
        const userId = user._id.valueOf();
        const formData = {
            name,
            mobileNumber,
            email,
            district,
            sessionType,
            course: "Hindi Teachers Course",
        };
        await User.findByIdAndUpdate(userId, { $push: { formSubmitted: formData }, }, { new: true });
        res.status(200).json("Form Submitted");
    } catch (error) {
        console.log(error);
        res.status(500).send("An error occurred while submitting form", error);
    }
});

module.exports = router;