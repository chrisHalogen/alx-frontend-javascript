export default function createInt8TypedArray(length, position, value) {
  const data = new ArrayBuffer(length);
  const v = new DataView(data);

  try {
    v.setInt8(position, value);
  } catch (e) {
    throw Error("Position outside range");
  }
  return v;
}
