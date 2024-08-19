const { loadConfig } = require("../src");
const Joi = require("joi");

test("should load and validate configuration", () => {
  const schema = Joi.object({
    JWT_SECRET: Joi.string().required(),
    REDIS_URL: Joi.string().uri().required(),
  });

  // Mock environment variables explicitly
  const mockEnv = {
    JWT_SECRET: "testsecret",
    REDIS_URL: "redis://localhost:6379",
  };

  // Pass the mock environment directly to loadConfig
  const config = loadConfig(schema, mockEnv);

  // Validate the config
  expect(config.JWT_SECRET).toBe("testsecret");
  expect(config.REDIS_URL).toBe("redis://localhost:6379");
});
