const winston = require("winston");

const auditLogger = winston.createLogger({
  level: "info",
  format: winston.format.json(),
  transports: [new winston.transports.File({ filename: "audit.log" })],
});

function auditLog(message, details) {
  let log = auditLogger.info({ message, details });
  return log;
}

module.exports = {
  auditLog,
  auditLogger, // Export the logger for testing
};
