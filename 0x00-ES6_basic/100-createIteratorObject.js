export default function createIteratorObject(report) {
  const dept = Object.values(report.allEmployees);

  let cdi = 0;
  let cei = 0;

  return {
    next() {
      if (cdi >= dept.length) {
        return { done: true };
      }

      const currentDept = dept[cdi];
      const currentEmp = currentDept[cei];

      cei++;

      if (cei >= currentDept.length) {
        cdi++;
        cei = 0;
      }

      return { value: currentEmp, done: false };
    },
    [Symbol.iterator]() {
      return this;
    },
  };
}
