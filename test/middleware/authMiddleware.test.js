const request = require("supertest");
const express = require("express");
const jwt = require("jsonwebtoken");
const { authenticate } = require("../../src/middleware/authMiddleware");
const { UnauthorizedError } = require("../../src/errors");

const JWT_SECRET = process.env.JWT_SECRET || "wgpD2qMfpumvtyjxxEltSFE7k9sHiHs=";

describe("Auth Middleware", () => {
  let app;

  beforeAll(() => {
    app = express();
    app.use(express.json());

    // Simulate a protected route
    app.get("/protected", authenticate, (req, res) => {
      res.status(200).json({ message: "You have access", user: req.user });
    });

    // Error handling middleware for test purposes
    app.use((err, req, res, next) => {
      if (err instanceof UnauthorizedError) {
        return res.status(err.statusCode).json({ error: err.message });
      }
      res.status(500).json({ error: "Server error" });
    });
  });

  it("should allow access with a valid token", async () => {
    const token = jwt.sign({ userId: 1, name: "John Doe" }, JWT_SECRET);
    const response = await request(app)
      .get("/protected")
      .set("Authorization", `Bearer ${token}`);

    expect(response.status).toBe(200);
    expect(response.body.message).toBe("You have access");
    expect(response.body.user).toEqual({
      userId: 1,
      name: "John Doe",
      iat: expect.any(Number),
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should deny access if no token is provided", async () => {
    const response = await request(app).get("/protected");

    expect(response.status).toBe(401);
    expect(response.body.error).toBe("Authentication token is required");
  });

  it("should deny access with an invalid token", async () => {
    const response = await request(app)
      .get("/protected")
      .set("Authorization", "Bearer invalid-token");

    expect(response.status).toBe(401);
    expect(response.body.error).toBe("Invalid or expired authentication token");
  });

  it("should deny access with an expired token", async () => {
    const token = jwt.sign({ userId: 1, name: "John Doe" }, JWT_SECRET, {
      expiresIn: "-10s",
    });
    const response = await request(app)
      .get("/protected")
      .set("Authorization", `Bearer ${token}`);

    expect(response.status).toBe(401);
    expect(response.body.error).toBe("Invalid or expired authentication token");
  });
});
