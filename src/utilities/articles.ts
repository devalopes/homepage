import Parser from 'rss-parser';
import { Buffer } from 'buffer';
import { storeWithExpiry, getWithExpiry } from './storage';

const FEED_PARSER: Parser = new Parser();
const CORS_PROXY = Buffer.from(
  "aHR0cHM6Ly9ob21lcGFnZS5kZXZhbG9wZXMud29ya2Vycy5kZXYvY29yc3Byb3h5P3VybD0=", "base64"
);

async function getContent(
  url: string,
  proxy: boolean,
  json: boolean,
  cacheTime?: number
) {
  const storedData = await getWithExpiry(url);
  if (cacheTime && storedData) {
    return storedData;
  };
  const response = await fetch(proxy ? CORS_PROXY + url : url);
  const data = json ? await response.json() : await response.text();
  if (response.ok) {
    if (cacheTime) {
      await storeWithExpiry(url, data, cacheTime);
  }   
    return data;
  } else {
    console.error(`${JSON.stringify(data)}`);
    throw new Error(`Failed to load ${url}`);
  }
}

export async function getRssFeed(url: string, cacheTime: number = 3_600_000) {
    const text = await getContent(url, true, false, cacheTime);
    try {
        const feed =  await FEED_PARSER.parseString(text);
        console.log(feed)
        return feed
    }
    catch (exception){
        console.error(`Failed to parse ${url}: ${exception}`)
    }
}
