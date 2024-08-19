const { createRateLimiter } = require("../../src/api/rateLimiter");
const httpMocks = require("node-mocks-http");

describe("Rate Limiter", () => {
  test("should create a rate limiter with default settings", async () => {
    const rateLimiter = createRateLimiter();

    // Mock request with necessary properties
    const req = httpMocks.createRequest({
      ip: "127.0.0.1", // mock IP address
      headers: {
        "x-forwarded-for": "127.0.0.1",
      },
      connection: {
        remoteAddress: "127.0.0.1",
      },
    });

    // Mocking additional req methods and properties
    req.get = jest.fn((header) => req.headers[header.toLowerCase()]);
    req.socket = { remoteAddress: "127.0.0.1" }; // Mock socket.remoteAddress
    req.connection.socket = { remoteAddress: "127.0.0.1" }; // Mock connection.socket.remoteAddress

    const res = httpMocks.createResponse();
    const next = jest.fn();

    // Simulate a request to trigger the rate limiter
    await rateLimiter(req, res, next);

    // Check the headers set by the rate limiter
    expect(res.getHeader("X-RateLimit-Limit")).toBe("100");
    expect(res.getHeader("X-RateLimit-Remaining")).toBeDefined();
    expect(next).toHaveBeenCalled();
  });

  test("should limit requests and return a 429 status code after the limit is exceeded", async () => {
    const rateLimiter = createRateLimiter({ windowMs: 1000, max: 1 });

    // Mock request with necessary properties
    const req = httpMocks.createRequest({
      ip: "127.0.0.1", // mock IP address
      headers: {
        "x-forwarded-for": "127.0.0.1",
      },
      connection: {
        remoteAddress: "127.0.0.1",
      },
    });

    // Mocking additional req methods and properties
    req.get = jest.fn((header) => req.headers[header.toLowerCase()]);
    req.socket = { remoteAddress: "127.0.0.1" }; // Mock socket.remoteAddress
    req.connection.socket = { remoteAddress: "127.0.0.1" }; // Mock connection.socket.remoteAddress

    const res = httpMocks.createResponse();
    const next = jest.fn();

    // First request - should pass
    await rateLimiter(req, res, next);
    expect(next).toHaveBeenCalled();

    // Second request - should fail
    const res2 = httpMocks.createResponse();
    const next2 = jest.fn();
    await rateLimiter(req, res2, next2);

    expect(res2.statusCode).toBe(429); // 429 Too Many Requests
    expect(res2._getData()).toBe("Too many requests, please try again later.");
  });
});
