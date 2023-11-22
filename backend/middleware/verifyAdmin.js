const jwt = require("jsonwebtoken");

const verifyAdmin = (req, res, next) => {
    const token = req.headers.authorization;
    if (!token) {
        return res.status(401).json("Unauthorized, token not found");
    }
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    if (!decoded) {
        return res.status(401).json("Unauthorized, invalid token");
    }
    if (decoded.isAdmin === false) {
        return res.status(401).json("Unauthorized, you are not an admin");
    }
    req.user = decoded;
    next();
}

module.exports = verifyAdmin;