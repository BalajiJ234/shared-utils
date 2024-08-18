const i18n = require("i18n");
const path = require("path");

i18n.configure({
  locales: ["en", "fr", "es", "ta", "hi", "ml"],
  directory: path.join(__dirname, "locales"),
  defaultLocale: "en",
  objectNotation: true,
});

function setLocale(locale) {
  i18n.setLocale(locale);
}

function translate(key) {
  return i18n.__(key);
}

module.exports = {
  setLocale,
  translate,
};
