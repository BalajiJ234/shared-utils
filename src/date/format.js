const { format } = require("date-fns");

function formatDate(date, dateFormat = "yyyy-MM-dd") {
  return format(date, dateFormat);
}

module.exports = {
  formatDate,
};
