const rateLimit = require("express-rate-limit");

function rateLimiter(options) {
  return rateLimit({
    windowMs: options.windowMs || 15 * 60 * 1000,
    max: options.max || 100,
  });
}

module.exports = {
  rateLimiter,
};
