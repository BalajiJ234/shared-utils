const redis = require("redis");
let client;

beforeAll(() => {
  client = redis.createClient(); // Initialize the Redis client
  return client.connect(); // Ensure the client is connected
});

afterAll(() => {
  if (client) {
    return client.quit(); // Quit the client after all tests are done
  }
});

test("Some Redis test", async () => {
  // Your test logic here
  const result = await client.set("key", "value");
  expect(result).toBe("OK");
});

test("Another Redis test", async () => {
  // Your test logic here
  const value = await client.get("key");
  expect(value).toBe("value");
});
