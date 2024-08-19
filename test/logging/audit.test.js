const { auditLog, auditLogger } = require("../../src");

test("should log an audit message", () => {
  const loggerSpy = jest.spyOn(auditLogger, "info");
  auditLog("User login", { userId: 123 });

  expect(loggerSpy).toHaveBeenCalledWith(
    expect.objectContaining({
      message: "User login",
      details: { userId: 123 },
      level: "info",
    })
  );

  loggerSpy.mockRestore();
});
