const { loadConfig } = require("../../src/config");
const Joi = require("joi");

test("should load and validate configuration", () => {
  const schema = Joi.object({
    TEST_CONFIG: Joi.string().required(),
  });

  const config = loadConfig(schema, { TEST_CONFIG: "value" });
  expect(config.TEST_CONFIG).toBe("value");
});

test("should throw an error for invalid configuration", () => {
  const schema = Joi.object({
    TEST_CONFIG: Joi.string().required(),
  });

  expect(() => loadConfig(schema, {})).toThrow(
    "Configuration validation error"
  );
});
