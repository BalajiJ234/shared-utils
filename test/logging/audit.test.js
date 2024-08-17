const { auditLog } = require("../../src/logging/audit");

test("should log an audit message", () => {
  const consoleSpy = jest.spyOn(console, "log");
  auditLog("User login", { userId: 123 });
  expect(consoleSpy).toHaveBeenCalled();
});
