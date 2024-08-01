export default function updateUniqueItems(map) {
  const data = map;

  if (data instanceof Map) {
    for (const [key, value] of data) {
      if (value === 1) {
        data.set(key, 100);
      }
    }
  } else {
    throw new Error("Cannot process");
  }
  return data;
}
