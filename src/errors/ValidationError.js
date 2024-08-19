class ValidationError extends Error {
  constructor(message = "Invalid data provided") {
    super(message);
    this.name = "ValidationError";
    this.statusCode = 400;
  }
}

module.exports = ValidationError;
