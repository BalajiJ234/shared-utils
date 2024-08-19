const logger = require("../../src");

test("should log an info message", () => {
  logger.info = jest.fn();
  logger.info("This is an info log");
  expect(logger.info).toHaveBeenCalledWith("This is an info log");
});
