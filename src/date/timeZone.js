const { zonedTimeToUtc, utcToZonedTime, format } = require("date-fns-tz");

function convertToTimeZone(date, timeZone) {
  return utcToZonedTime(date, timeZone);
}

function formatInTimeZone(
  date,
  timeZone,
  formatString = "yyyy-MM-dd HH:mm:ssXXX"
) {
  const zonedDate = utcToZonedTime(date, timeZone);
  return format(zonedDate, formatString, { timeZone });
}

module.exports = {
  convertToTimeZone,
  formatInTimeZone,
};
