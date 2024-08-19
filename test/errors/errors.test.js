const { NotFoundError, ValidationError } = require("../../src");

describe("Custom Error Classes", () => {
  it("should create a NotFoundError with correct properties", () => {
    const error = new NotFoundError("Task not found");
    expect(error.name).toBe("NotFoundError");
    expect(error.message).toBe("Task not found");
    expect(error.statusCode).toBe(404);
  });

  it("should create a ValidationError with correct properties", () => {
    const error = new ValidationError("Invalid input");
    expect(error.name).toBe("ValidationError");
    expect(error.message).toBe("Invalid input");
    expect(error.statusCode).toBe(400);
  });
});
