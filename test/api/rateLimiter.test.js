const { createRateLimiter } = require("../../src/rateLimiter");

test("should create a rate limiter with default settings", () => {
  const rateLimiter = createRateLimiter();
  expect(rateLimiter).toBeDefined();
  expect(rateLimiter.windowMs).toBe(15 * 60 * 1000); // 15 minutes
  expect(rateLimiter.max).toBe(100);
});
