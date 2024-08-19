const { sendEmail } = require("./email");
const { sendPushNotification } = require("./push");

module.exports = {
  sendEmail,
  sendPushNotification,
};
