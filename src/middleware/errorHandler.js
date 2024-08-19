const { ValidationError, NotFoundError } = require("../errors");
// const logger = require("../logging/logger");

function errorHandler(err, req, res, next) {
  // logger.error("Error encountered", { error: err });

  if (err instanceof ValidationError) {
    return res.status(err.statusCode).json({ error: err.message });
  }

  if (err instanceof NotFoundError) {
    return res.status(err.statusCode).json({ error: err.message });
  }

  // If the error is not an instance of our custom errors, return a generic 500
  res.status(500).json({ error: "An unexpected error occurred" });
}

module.exports = errorHandler;
