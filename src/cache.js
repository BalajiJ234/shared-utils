const redis = require("redis");
const { promisify } = require("util");

const client = redis.createClient();

const getAsync = promisify(client.get).bind(client);
const setAsync = promisify(client.set).bind(client);

async function cacheResponse(key, data, ttl = 60) {
  await setAsync(key, JSON.stringify(data), "EX", ttl);
}

async function getCachedResponse(key) {
  const data = await getAsync(key);
  return data ? JSON.parse(data) : null;
}

module.exports = {
  cacheResponse,
  getCachedResponse,
};
