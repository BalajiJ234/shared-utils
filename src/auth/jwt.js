const jwt = require("jsonwebtoken");

const secretKey = process.env.JWT_SECRET || "6YsOWK72w6AOuakGzwrrjEBhMRimQZg=";

function signToken(payload, options = {}) {
  return jwt.sign(payload, secretKey, { expiresIn: "1h", ...options });
}

function verifyToken(token) {
  return jwt.verify(token, secretKey);
}

module.exports = {
  signToken,
  verifyToken,
};
