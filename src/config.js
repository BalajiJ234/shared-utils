const Joi = require("joi");

function loadConfig(schema, env = process.env) {
  const { error, value } = schema.validate(env, { abortEarly: false });
  if (error) {
    throw new Error(`Configuration validation error: ${error.message}`);
  }
  return value;
}

const configSchema = Joi.object({
  NODE_ENV: Joi.string().valid("development", "production", "test").required(),
  PORT: Joi.number().default(3000),
  JWT_SECRET: Joi.string().required(),
  REDIS_URL: Joi.string().uri().required(),
}).unknown(true);

const config = loadConfig(configSchema);

module.exports = {
  loadConfig,
  config,
};
