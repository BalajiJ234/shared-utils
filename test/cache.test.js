const { cacheResponse, getCachedResponse } = require("../../src/cache");

test("should cache and retrieve a response", async () => {
  await cacheResponse("testKey", { some: "data" }, 1);
  const data = await getCachedResponse("testKey");
  expect(data).toEqual({ some: "data" });

  // Wait for the cache to expire
  await new Promise((resolve) => setTimeout(resolve, 2000));
  const expiredData = await getCachedResponse("testKey");
  expect(expiredData).toBeNull();
});
