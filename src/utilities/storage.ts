export async function storeWithExpiry(
  key: string,
  value: string,
  ttl: number = 3_600_000
) {
  // default 60 minutes
  let expiry = new Date().getTime() + ttl;
  console.log(`Caching ${key} in local storage expires ${new Date(expiry)}`)
  localStorage.setItem(
    key,
    JSON.stringify({
      value: value,
      expiry: expiry,
    })
  );
}

export async function getWithExpiry(key: string) {
  const itemStr = localStorage.getItem(key);
  if (!itemStr) {
    return null;
  }
  try {
    const item = JSON.parse(itemStr);
    if (new Date().getTime() > item.expiry || !item.expiry) {
      console.log(`Removing cached data for ${key}`)
      localStorage.removeItem(key);
      return null;
    }
    console.log(`Retrieved cached data from ${key} expires ${new Date(item.expiry)}`);
    return Promise.resolve(item.value);
  } catch (exception) {
    console.error(`Failure parsing ${key} from local storage: ${exception}`);
    return null;
  }
}
