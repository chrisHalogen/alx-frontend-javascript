export default function cleanSet(set, startString) {
  const data = [];

  if (
    typeof set !== "object" ||
    typeof startString !== "string" ||
    startString.length === 0
  ) {
    return "";
  }

  for (const item of set) {
    if (item && item.startsWith(startString)) {
      data.push(item.slice(startString.length));
    }
  }

  return data.join("-");
}
