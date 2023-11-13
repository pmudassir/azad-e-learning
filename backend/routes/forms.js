const express = require('express');
const router = express.Router();

router.post("/ppttc", async (req, res) => {
    try {
        const userEmail = req.user.emails[0].value;
        const user = await User.findOne({ email: userEmail });
        const userId = user._id.valueOf();
        const formData = {
            name: req.body.name,
            mobileNumber: req.body.number,
            email: req.body.email,
            district: req.body.district,
            mode: req.body.mode,
            course: "ppttc",
        };
        await User.findByIdAndUpdate(userId, { $push: { formSubmitted: formData }, }, { new: true });
        req.flash("success", "Form submitted successfully!");
        res.status(200).redirect("/");
    } catch (error) {
        console.log(error);
        res.status(500).send("An error occurred while submitting form", error);
    }
});

router.post("/mttc", async (req, res) => {
    try {
        const userEmail = req.user.emails[0].value;
        const user = await User.findOne({ email: userEmail });
        const userId = user._id.valueOf();
        const formData = {
            name: req.body.name,
            mobileNumber: req.body.number,
            email: req.body.email,
            district: req.body.district,
            mode: req.body.mode,
            course: "mttc",
        };
        await User.findByIdAndUpdate(userId, { $push: { formSubmitted: formData }, }, { new: true });
        req.flash("success", "Form submitted successfully!");
        res.status(200).redirect("/");
    } catch (error) {
        console.log(error);
        res.status(500).send("An error occurred while submitting form", error);
    }
});

router.post("/hindi", async (req, res) => {
    try {
        const userEmail = req.user.emails[0].value;
        const user = await User.findOne({ email: userEmail });
        const userId = user._id.valueOf();
        const formData = {
            name: req.body.name,
            mobileNumber: req.body.number,
            email: req.body.email,
            district: req.body.district,
            mode: req.body.mode,
            course: "hindi teachers course",
        };
        await User.findByIdAndUpdate(userId, { $push: { formSubmitted: formData }, }, { new: true });
        req.flash("success", "Form submitted successfully!");
        res.status(200).redirect("/");
    } catch (error) {
        console.log(error);
        res.status(500).send("An error occurred while submitting form", error);
    }
});

module.exports = router;