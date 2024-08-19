const { validateTask } = require("../../src");

describe("Task Validator", () => {
  it("should validate a correct task", () => {
    const task = {
      title: "Valid Task",
      description: "A valid description",
      dueDate: "2024-08-20",
      status: "pending",
    };
    const validationResult = validateTask(task);
    expect(validationResult).toBeNull();
  });

  it("should return an error for missing title", () => {
    const task = {
      description: "A valid description",
      dueDate: "2024-08-20",
      status: "pending",
    };
    const validationResult = validateTask(task);
    expect(validationResult).toMatch(/Title is required/);
  });

  it("should return an error for invalid status", () => {
    const task = {
      title: "Invalid Status Task",
      description: "A valid description",
      dueDate: "2024-08-20",
      status: "invalid-status",
    };
    const validationResult = validateTask(task);
    expect(validationResult).toMatch(
      /Status is required and must be one of the following/
    );
  });

  // Add more tests for other fields and scenarios as needed
});
