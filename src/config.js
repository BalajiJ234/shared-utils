// /src/config.js

const path = require("path");
const Joi = require("joi");
const dotenv = require("dotenv");

// Load environment variables from ../secrets/.env
dotenv.config({ path: path.resolve(__dirname, "../secrets/.env") });
// console.log("Loaded ENV:", process.env.JWT_SECRET, process.env.REDIS_URL);

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
