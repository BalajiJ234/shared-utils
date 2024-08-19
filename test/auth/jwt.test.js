const { signToken, verifyToken } = require("../../src");

test("should sign and verify a token", () => {
  const token = signToken({ userId: 123 });
  const payload = verifyToken(token);
  expect(payload.userId).toBe(123);
});

test("should throw error for invalid token", () => {
  expect(() => verifyToken("invalid.token")).toThrow();
});
