export default function (boolean) {
  return new Promise((resolve, reject) => {
    const result = {
      status: 200,
      body: "Success",
    };

    if (boolean === true) {
      resolve(result);
    } else {
      reject(Error("The fake API is not working currently"));
    }
  });
}
