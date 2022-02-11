const febonacci = (num) => {
  if (num === 0) {
    return 0;
  }
  if (num === 1) {
    return 1;
  }
  let n_1 = 0;
  let n_2 = 1;
  let nth = 0;
  for (let i = 2; i <= num; i++) {
    nth = n_1 + n_2;
    n_1 = n_2;
    n_2 = nth;
  }
  return nth;
};
console.log(febonacci(45));

const febonacciRecursive = (num) => {   
  if (num === 0) {
    return 0;
  }
  if (num === 1) {
    return 1;
  }
  return febonacciRecursive(num - 1) + febonacciRecursive(num - 2);
};

console.log(febonacciRecursive(14));

//test
describe("should first", () => {
  it("should first", () => {
    expect(febonacci(1)).toEqual(1);
  });
  it("should first", () => {
    expect(febonacci(7)).toEqual(13);
  });
});

describe("febonacci recursive", () => {
  it("should rentrun febonacci number of 1", () => {
    expect(febonacciRecursive(1)).toEqual(1);
  });
  it("should rentrun febonacci number of 7", () => {
    expect(febonacciRecursive(7)).toEqual(13);
  });
});
