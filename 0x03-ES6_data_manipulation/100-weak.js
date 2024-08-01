export const weakMap = new WeakMap();
export function queryAPI(url) {
  let count = weakMap.get(url) || 0;
  count += 1;

  if (count >= 5) {
    throw new Error("Endpoint load is high");
  } else {
    weakMap.set(url, count);
  }
}
