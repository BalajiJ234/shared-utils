const { setLocale, translate } = require("../src");

test("should translate a key to a specified language", () => {
  setLocale("ta");
  const translation = translate("greeting");
  expect(translation).toBe("வணக்கம்"); // Assuming 'greeting' in Tamil is 'வணக்கம்'
});

test("should translate a key to a specified language", () => {
  setLocale("ml");
  const translation = translate("greeting");
  expect(translation).toBe("നമസ്കാരം"); // Assuming 'greeting' in Malayalam is 'നമസ്കാരം'
});

test("should translate a key to the default language", () => {
  setLocale("en");
  const translation = translate("greeting");
  expect(translation).toBe("Hello"); // Assuming 'greeting' in default (en) locale is 'Hello'
});

test("should translate a key to a specified language", () => {
  setLocale("fr");
  const translation = translate("greeting");
  expect(translation).toBe("Bonjour"); // Assuming 'greeting' in French is 'Bonjour'
});

test("should translate a key to a specified language", () => {
  setLocale("es");
  const translation = translate("good_morning");
  expect(translation).toBe("Buenos días"); // Assuming 'good_morning' in Spanish is 'Buenos días'
});

test("should translate a key to a specified language", () => {
  setLocale("hi");
  const translation = translate("greeting");
  expect(translation).toBe("नमस्ते"); // Assuming 'greeting' in Hindi is 'नमस्ते'
});
