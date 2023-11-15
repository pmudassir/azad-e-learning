const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const User = require('./models/User');
require("dotenv").config()
const app = express();
const authRoute = require('./routes/auth');

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// app.use(session({
//     secret: 'your_secret_key',
//     resave: false,
//     saveUninitialized: false,
//     cookie: { secure: false }
// }));
app.use(passport.initialize());
app.use(passport.session());

passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: 'http://localhost:3000/auth/google/azad',
}, async (accessToken, refreshToken, profile, done) => {
    try {
        const user = await User.findOne({ googleId: profile.id })
        if (!user) {
            const newUser = new User({
                googleId: profile.id,
                displayName: profile.displayName,
                email: profile.emails[0].value,
                image: profile.photos[0].value
            })
            await newUser.save()
            return done(null, profile);
        }
        return done(null, profile);
    } catch (error) {
        console.log(error);
        return done(error);
    }
}
));

passport.serializeUser((user, done) => {
    done(null, user);
});

passport.deserializeUser((user, done) => {
    done(null, user);
});

// Routes
app.use("/api/auth", authRoute);


app.get("/", async (req, res) => {
    if (req.user) {
        const user = await User.findOne({ email: req.user.emails[0].value })
        const admin = user?.isAdmin
        return res.render("home", { user: req.user, admin })
    }
    res.render("home", { user: req.user })
})

app.get('/auth/google',
    passport.authenticate('google', { scope: ['profile', 'email'] })
);

app.get('/auth/google/azad',
    passport.authenticate('google', { failureRedirect: '/login' }),
    (req, res) => {
        res.redirect('/');
    }
);

app.get("/login", (req, res) => {
    res.render('login')
})

const ensureAuthenticated = (req, res, next) => {
    if (req.isAuthenticated()) {
        return next();
    }
    res.redirect('/login');
};

const ensureIsAdmin = async (req, res, next) => {
    if (req.isAuthenticated()) {
        if (req.user) {
            const user = await User.findOne({ email: req.user.emails[0].value })
            const admin = user.isAdmin
            if (admin) {
                next()
            }
            res.render("notAllowed")
        }
    }
}

app.get("/level1", ensureAuthenticated, (req, res) => {
    res.render("level1", { user: req.user })
})

app.get("/ppttc", ensureAuthenticated, (req, res) => {
    res.render("ppttc", { user: req.user })
})

app.get("/mttc", ensureAuthenticated, (req, res) => {
    res.render("mttc", { user: req.user })
})

app.get("/hindi", ensureAuthenticated, (req, res) => {
    res.render("hindi", { user: req.user })
})

app.get("/competitive", ensureAuthenticated, (req, res) => {
    res.render("competitive", { user: req.user })
})

app.get("/admin", ensureIsAdmin, (req, res) => {
    res.render("admin", { user: req.user })
})

app.get('/logout', (req, res) => {
    req.logout(() => {
        res.redirect('/');
    });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});