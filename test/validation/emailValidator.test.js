const { validateEmail } = require("../../src");

test("should validate correct email", () => {
  expect(validateEmail("test@example.com")).toBe(true);
});

test("should invalidate incorrect email", () => {
  expect(validateEmail("invalid-email")).toBe(false);
});
