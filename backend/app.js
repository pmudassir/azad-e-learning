const express = require("express");
const passport = require("passport");
// const GoogleStrategy = require("passport-google-oauth20").Strategy;
// const User = require("./models/User");
require("dotenv").config();
const app = express();
const authRoute = require("./routes/auth");
const formsRoute = require("./routes/forms");
const courseRoute = require("./routes/course");
const connectDB = require("./utils/db");
const session = require("express-session");
const cors = require("cors");
const jwt = require("jsonwebtoken");

// Connect to MongoDB
connectDB();

app.use(cors());

app.use(
  session({
    secret: process.env.SESSION_SECRET_KEY,
    resave: false,
    saveUninitialized: true,
  })
);
// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// app.use(passport.initialize());
// app.use(passport.session());

// passport.use(
//   new GoogleStrategy(
//     {
//       clientID: process.env.GOOGLE_CLIENT_ID,
//       clientSecret: process.env.GOOGLE_CLIENT_SECRET,
//       callbackURL: "http://localhost:4000/auth/google/callback",
//     },
//     async (accessToken, refreshToken, profile, done) => {
//       try {
//         const user = await User.findOne({ email: profile.emails[0].value });
//         if (!user) {
//           const newUser = new User({
//             username: profile.displayName,
//             email: profile.emails[0].value,
//             image: profile.photos[0].value,
//           });
//           const savedUser = await newUser.save();
//           const accessToken = jwt.sign({ userId: savedUser._id }, process.env.JWT_SECRET);
//           return done(null, profile, accessToken);
//         }
//         const accessToken = jwt.sign({ userId: user._id }, process.env.JWT_SECRET);
//         return done(null, profile, accessToken);
//       } catch (error) {
//         console.log(error);
//         return done(error);
//       }
//     }
//   )
// );

// passport.serializeUser((user, done) => {
//   done(null, user);
// });

// passport.deserializeUser((user, done) => {
//   done(null, user);
// });

// Routes
app.use("/api/auth", authRoute);
app.use("/api/forms", formsRoute);
app.use("/api/course", courseRoute);

// app.get(
//   "/auth/google",
//   passport.authenticate("google", { scope: ["profile", "email"] })
// );

// app.get(
//   "/auth/google/callback",
//   passport.authenticate("google", { failureRedirect: "/auth" }),
//   (req, res) => {
//     res.redirect("http://localhost:3000/");
//   }
// );

// app.get("/logout", (req, res) => {
//   req.logout(() => {
//     res.redirect("/");
//   });
// });

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
