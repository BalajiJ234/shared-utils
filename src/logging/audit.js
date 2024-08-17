const winston = require("winston");

const auditLogger = winston.createLogger({
  level: "info",
  format: winston.format.json(),
  transports: [new winston.transports.File({ filename: "audit.log" })],
});

function auditLog(message, details) {
  auditLogger.info({ message, details });
}

module.exports = {
  auditLog,
};
