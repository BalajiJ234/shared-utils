const rateLimit = require("express-rate-limit");

function createRateLimiter(options = {}) {
  return rateLimit({
    windowMs: options.windowMs || 15 * 60 * 1000, // 15 minutes
    max: options.max || 100, // limit each IP to 100 requests per windowMs
    message: options.message || "Too many requests, please try again later.",
  });
}

module.exports = {
  createRateLimiter,
};
