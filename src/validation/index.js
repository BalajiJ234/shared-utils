const { validateEmail } = require("./emailValidation");
const { validateUserSchema } = require("./schema");
const { validateTask } = require("./taskValidator");

module.exports = {
  validateEmail,
  validateUserSchema,
  validateTask,
};
