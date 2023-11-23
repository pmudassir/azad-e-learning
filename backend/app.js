const express = require("express");
const app = express();
const authRoute = require("./routes/auth");
const formsRoute = require("./routes/forms");
const courseRoute = require("./routes/course");
const userRoute = require("./routes/user");
const connectDB = require("./utils/db");
const session = require("express-session");
const cors = require("cors");

// Connect to MongoDB
connectDB();

app.use(cors());

// Middleware
app.use(
  session({
    secret: process.env.SESSION_SECRET_KEY,
    resave: false,
    saveUninitialized: true,
  })
);
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routes
app.use("/api/auth", authRoute);
app.use("/api/forms", formsRoute);
app.use("/api/course", courseRoute);
app.use("/api/users", userRoute)

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});