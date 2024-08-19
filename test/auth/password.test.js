const { hashPassword, comparePassword } = require("../../src");

test("should hash and compare a password correctly", () => {
  const password = "mysecretpassword";
  const hash = hashPassword(password);
  expect(comparePassword(password, hash)).toBe(true);
});

test("should return false for incorrect password", () => {
  const password = "mysecretpassword";
  const hash = hashPassword(password);
  expect(comparePassword("wrongpassword", hash)).toBe(false);
});
