import { parseFeed } from "htmlparser2";

async function getContent(url: string, json: boolean = false) {
  try {
    const response = await fetch(url);
    const data = json ? await response.json() : await response.text();
    if (response.ok) {
      return data;
    } else {
      console.error(`Fetch response ${response.status}: ${JSON.stringify(data)}`);
    }
  } catch (exception) {
    console.error(`Failed to get ${url}: ${exception}`);
  }
}

export async function getRssFeed(url: string) {
  const text = await getContent(url);
  try {
    const feed = parseFeed(text);
    return feed;
  } catch (exception) {
    console.error(`Failed to parse ${url}: ${exception}`);
  }
}
