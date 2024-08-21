const errorHandler = require("./errorHandler");
const { authenticate } = require("./authMiddleware");

module.exports = {
  errorHandler,
  authenticate,
};
