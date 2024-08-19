const rateLimit = require("express-rate-limit");

function createRateLimiter(options = {}) {
  const limiter = rateLimit({
    windowMs: options.windowMs || 15 * 60 * 1000, // 15 minutes
    max: options.max || 100, // limit each IP to 100 requests per windowMs
    message: options.message || "Too many requests, please try again later.",
    keyGenerator: (req) => {
      // console.log("req.get:", req.get);
      // console.log(
      //   "req.connection.remoteAddress:",
      //   req.connection ? req.connection.remoteAddress : undefined
      // );
      // console.log(
      //   "req.socket.remoteAddress:",
      //   req.socket ? req.socket.remoteAddress : undefined
      // );
      // console.log(
      //   "req.connection.socket.remoteAddress:",
      //   req.connection && req.connection.socket
      //     ? req.connection.socket.remoteAddress
      //     : undefined
      // );

      // Existing key generation logic
      return req.ip;
    },
  });

  return limiter;
}

module.exports = {
  createRateLimiter,
};
