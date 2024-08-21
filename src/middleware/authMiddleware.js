const jwt = require("jsonwebtoken");
const { UnauthorizedError } = require("../errors");

const JWT_SECRET = process.env.JWT_SECRET || "wgpD2qMfpumvtyjxxEltSFE7k9sHiHs=";

function authenticate(req, res, next) {
  const token = req.header("Authorization")?.replace("Bearer ", "");

  if (!token) {
    // console.log("No token provided");
    return next(new UnauthorizedError("Authentication token is required"));
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    // console.log("Token successfully decoded:", decoded);
    req.user = decoded;
    next();
  } catch (err) {
    // console.log("Failed to verify token:", err.message);
    next(new UnauthorizedError("Invalid or expired authentication token"));
  }
}

module.exports = {
  authenticate,
};
