const request = require("supertest");
const express = require("express");
const { errorHandler } = require("../../src/middleware");
const { NotFoundError, ValidationError } = require("../../src/errors");

describe("Error Handling Middleware", () => {
  let app;

  beforeEach(() => {
    app = express();
    app.use(express.json());

    // Route that throws a ValidationError
    app.get("/validation-error", (req, res, next) => {
      next(new ValidationError("Invalid data provided"));
    });

    // Route that throws a NotFoundError
    app.get("/not-found", (req, res, next) => {
      next(new NotFoundError("Resource not found"));
    });

    // Route that throws a generic error
    app.get("/unknown-error", (req, res, next) => {
      next(new Error("Something went wrong"));
    });

    // Use the error handler
    app.use(errorHandler);
  });

  it("should handle ValidationError correctly", async () => {
    const response = await request(app).get("/validation-error");
    expect(response.status).toBe(400);
    expect(response.body.error).toBe("Invalid data provided");
  });

  it("should handle NotFoundError correctly", async () => {
    const response = await request(app).get("/not-found");
    expect(response.status).toBe(404);
    expect(response.body.error).toBe("Resource not found");
  });

  it("should handle generic errors correctly", async () => {
    const response = await request(app).get("/unknown-error");
    expect(response.status).toBe(500);
    expect(response.body.error).toBe("An unexpected error occurred");
  });
});
