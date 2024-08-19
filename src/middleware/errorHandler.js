// shared-utils/middleware/errorHandler.js

const { ValidationError, NotFoundError } = require("../errors");
const { logger } = require("../logging");

function errorHandler(err, req, res, next) {
  logger.error("Error encountered", { error: err });

  if (err instanceof ValidationError) {
    return res.status(err.statusCode).json({ error: err.message });
  }

  if (err instanceof NotFoundError) {
    return res.status(err.statusCode).json({ error: err.message });
  }

  // Generic server error
  res.status(500).json({ error: "An unexpected error occurred" });
}

module.exports = errorHandler;
